
export class User {
    uid: string;
    email: string;
    displayName: string;
    firstName: string;
    lastName: string;
    likedBars: number[];
    barCardCount: number;

    constructor(auth: any){
        this.uid = auth.uid;
        this.email = auth.email;
        this.displayName = auth.displayName;

    }
}