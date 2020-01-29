//https://medium.com/@ales.musto/firebase-cloud-functions-that-run-on-a-set-schedule-b5d62cbbc476
// ^ reference

const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

//Project Id: barcrawlv01
// https://us-central1-barcrawlv01.cloudfunctions.net/clearAttendingBars

//Initial function call:
exports.clearAttendingBars = functions.https.onRequest((req, res) => {
    //create database ref
    var dbRef = admin.database();

    //Modifying and pushing whole object, could be more efficient later
    dbRef.ref('/userInfo').once('value').then(function (snapshot) {

        console.log(snapshot.val());

        var data = snapshot.val();

        //Go through all users
        Object.keys(data).forEach(function (key, index) {
            // key: the name of the object key
            // index: the ordinal position of the key within the object 

            console.debug(key);

            delete data[key]["about"]["barsAttending"];
        });

        //Send back new object
        dbRef.ref('/userInfo').set(data).then(_ => {
            //send back response 
            res.redirect(200);
        });

    });


});

exports.sendFriendNotification = functions.database.ref('/userInfo/{recepientId}/friendRequestIn/{senderId}').onWrite(async (change, context) => {
    const recepientId = context.params.recepientId;
    const senderId = context.params.senderId;

    // If un-follow we exit the function.
    if (!change.after.val()) {
        return console.log('User ', senderId, 'un-followed user', recepientId);
    }

    console.log('We have a new friend request UID:', senderId, 'for user:', recepientId);

    const getDeviceTokensPromise = admin.database().ref('userInfo/' + recepientId +'/notificationTokens').once('value');

    const getSenderProfilePromise = admin.database().ref('userInfo/' + senderId + '/about').once('value');

    // The snapshot to the user's tokens.
    let tokensSnapshot;

    // The array containing all the user's tokens.
    let tokens = [];

    const results = await Promise.all([getDeviceTokensPromise, getSenderProfilePromise]);
    tokensSnapshot = results[0];
    const sender = results[1].val();

    // Check if there are any device tokens.
    if (!tokensSnapshot.hasChildren()) {
        return console.log('There are no notification tokens to send to.');
    }

    console.log('There are', tokensSnapshot.numChildren(), 'tokens to send notifications to.');
    console.log('Fetched sender profile', sender);

    // Notification details.
    const payload = {
        notification: {
            title: 'You have a new friend request!',
            body: sender.firstName + " " + sender.lastName + " sent you a request.",
            icon: "https://firebasestorage.googleapis.com/v0/b/barcrawlv01.appspot.com/o/AppIcon100.png?alt=media&token=63b62367-2aa5-485c-bae9-ac459e5b35ba"
        }
    };

    tokensSnapshot.forEach(child => {
        tokens.push(child.val());
    });

    // Send notifications to all tokens.
    const response = await admin.messaging().sendToDevice(tokens, payload);
    // For each message check if there was an error.
    const tokensToRemove = [];
    response.results.forEach((result, index) => {
      const error = result.error;
      if (error) {
        console.error('Failure sending notification to', tokens[index], error);
        // Cleanup the tokens who are not registered anymore.
        if (error.code === 'messaging/invalid-registration-token' ||
            error.code === 'messaging/registration-token-not-registered') {
          tokensToRemove.push(tokensSnapshot.ref.child(tokens[index]).remove());
        }
      }
    });
    return Promise.all(tokensToRemove);

});