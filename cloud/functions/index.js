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
        Object.keys(data).forEach(function(key,index) {
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