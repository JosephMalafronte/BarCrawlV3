
export class User {
    uid: string;
    email: string;
    displayName: string;
    firstName: string;
    lastName: string;
    userName: string;
    likedBars: number[] = [];
    barCardCount: number;
    profilePicUrl: string;

    //Friends
    friendIds: string[] = [];
    friends: User[] = [];
    friendRequestOut: string[] = [];
    friendRequestIn: string[] = [];

    //Attending
    barsAttending: number[] = [];


    constructor(auth?: any){
        // If constructing without auth just create blank user
        if(!auth){
            return;
        }

        this.uid = auth.uid;
        this.email = auth.email;
        this.displayName = auth.displayName;
    }

    setFriendData(friendObject){
        if(friendObject.uid) this.uid = friendObject.uid;
        if(friendObject.email) this.email = friendObject.email;
        if(friendObject.firstName) this.firstName = friendObject.firstName;
        if(friendObject.lastName) this.lastName = friendObject.lastName;
        if(friendObject.profilePicUrl) this.profilePicUrl = friendObject.profilePicUrl;     
        if(friendObject.userName) this.userName = friendObject.userName;           
    }
    
}