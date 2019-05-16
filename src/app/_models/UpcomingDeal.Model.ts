

export class UpcomingDeal  {

  dayOfTheWeek: string;
  deals: any[];
  expanded: boolean = false;
  arrowText: string = "&#x25ba";


  public insertAll(result: any) : UpcomingDeal[] {
    var returnArray: UpcomingDeal[] = [];

    //For each day of the week
    var Wednesday: UpcomingDeal = new UpcomingDeal();
    Wednesday.dayOfTheWeek = "Wednesday";
    Wednesday.deals = Object.keys(result.Wednesday).map(key => result.Wednesday[key]);

    returnArray.push(Wednesday);

    var Thursday: UpcomingDeal = new UpcomingDeal();
    Thursday.dayOfTheWeek = "Thursday";
    Thursday.deals = Object.keys(result.Thursday).map(key => result.Thursday[key]);
    returnArray.push(Thursday);

    var Friday: UpcomingDeal= new UpcomingDeal();
    Friday.dayOfTheWeek = "Friday";
    Friday.deals =  Object.keys(result.Friday).map(key => result.Friday[key]);
    returnArray.push(Friday);

    var Saturday: UpcomingDeal= new UpcomingDeal();
    Saturday.dayOfTheWeek = "Saturday";
    Saturday.deals =  Object.keys(result.Saturday).map(key => result.Saturday[key]);
    returnArray.push(Saturday);

    var Sunday: UpcomingDeal= new UpcomingDeal();
    Sunday.dayOfTheWeek = "Sunday";
    Sunday.deals =  Object.keys(result.Sunday).map(key => result.Sunday[key]);
    returnArray.push(Sunday);

    var Monday: UpcomingDeal= new UpcomingDeal();
    Monday.dayOfTheWeek = "Monday";
    Monday.deals =  Object.keys(result.Monday).map(key => result.Monday[key]);
    returnArray.push(Monday);

    var Tuesday: UpcomingDeal= new UpcomingDeal();
    Tuesday.dayOfTheWeek = "Tuesday";
    Tuesday.deals =  Object.keys(result.Tuesday).map(key => result.Tuesday[key]);
    returnArray.push(Tuesday);

    return returnArray;

  }

  public expand() {
    this.expanded = !this.expanded;
    if(this.expanded == true) this.arrowText = "&#x25bc";
    else this.arrowText = "&#x25ba";
  }


}
