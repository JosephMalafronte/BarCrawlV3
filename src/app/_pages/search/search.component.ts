
import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { FormsModule } from '@angular/forms';
import { AuthService} from '../../_services/auth.service';
import {MainService} from '../../_services/main.service';
import { User } from '../../_models/User.Model';
import { BehaviorSubject } from 'rxjs';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  //Bar Page Slide Variables
  barSlide: boolean = false;
  showBarPage: boolean = false;
  barPageId: number = 0;


  searchString:string = "";
  activeSearchPage: number = 0;
  lastSearchedBars: string = "";
  lastSearchedUsers: string = "";

  barResults = [];
  userResults = [];
  saveUserResults = []; //Idk why barResults dont need this but whatever

  dayOfTheWeek = "Wednesday"; //Needs to be calculated


  constructor(private db: AngularFireDatabase, private auth: AuthService, private mainService: MainService) { }

  ngOnInit() {

  }

  activeNavIcon(index: number){
    if(this.activeSearchPage == index) return true;
    return false;
  }

  setActiveSearchPage(index: number){
    if(index == this.activeSearchPage) return;

    if(index == 0){
      document.getElementById('barHolder').classList.remove('bHHidden');
      document.getElementById('userHolder').classList.remove('uHOpen');

      //After animation clear array so no scrolling happens 
      var self = this;
      setTimeout(function () {
        self.saveUserResults = self.userResults;
        self.userResults = [];
      }, 400);

    }
    if(index == 1){
      if(this.searchString != this.lastSearchedUsers) this.userResults = [];
      else this.userResults = this.saveUserResults;
      document.getElementById('barHolder').classList.add('bHHidden');
      document.getElementById('userHolder').classList.add('uHOpen');
    }


    this.activeSearchPage = index;
    this.search();
  }


  focus(){
    document.getElementById('subject').focus();
    document.getElementById('subject').addEventListener('keyup',function(e){
      if (e.which == 13) this.blur();
    });
  }

  search(){
    var term = this.searchString;

    if(term == "") return;

    document.getElementById("subject").classList.remove("lightText");
    

    //Convert string
    term = term.toLowerCase();
    term =  term.charAt(0).toUpperCase() + term.slice(1);


    if(this.activeSearchPage == 0){
      if(this.lastSearchedBars == term) return;


      //https://angularfirebase.com/lessons/autocomplete-search-with-angular4-and-firebase/
      //https://stackoverflow.com/questions/40471284/firebase-search-by-child-value
      this.db.list('barCards/' + this.dayOfTheWeek, ref => ref.orderByChild('barName').limitToFirst(10).startAt(term).endAt(term + "\uf8ff")).valueChanges().subscribe(result => {
        console.log(result);
        this.barResults = result;
        this.lastSearchedBars = term;
      });
    }
    else if(this.activeSearchPage == 1){
      if(this.lastSearchedUsers==term) return;

      term = term.toLowerCase();

      var firstNames = [];
      var lastNames = [];
      var userNames = [];

      var finishedLoadingNumber: BehaviorSubject<number> = new BehaviorSubject<number>(0);
      finishedLoadingNumber.subscribe(value => {
        if(value == 3){
          //Remove duplicates 

          lastNames = lastNames.filter(value => {
            for(var i = 0;i<userNames.length; i++){
              if(userNames[i].about.uid == value.about.uid) return false;
            }
            return true;
          });

          firstNames = firstNames.filter(value => {
            for(var i = 0;i<lastNames.length; i++){
              if(lastNames[i].about.uid == value.about.uid) return false;
            }
            return true;
          });

          firstNames = firstNames.filter(value => {
            for(var i = 0;i<userNames.length; i++){
              if(userNames[i].about.uid == value.about.uid) return false;
            }
            return true;
          });
          
          var results = firstNames.concat(lastNames);
          results = results.concat(userNames);
          results = results.filter(value => {
            if(value.about.uid != this.auth.currentUser.uid) return true;
          });
          this.userResults = results;
        }
      });

      this.db.list('userInfo', ref => ref.orderByChild('about/search/firstName').limitToFirst(10).startAt(term).endAt(term + "\uf8ff")).valueChanges().subscribe((result:any[]) => {
        firstNames = result;
        finishedLoadingNumber.next(finishedLoadingNumber.getValue()+1);
      });

      //Last name search as well may add more late
      this.db.list('userInfo', ref => ref.orderByChild('about/search/lastName').limitToFirst(10).startAt(term).endAt(term + "\uf8ff")).valueChanges().subscribe((result:any[]) => {
        lastNames = result;
        finishedLoadingNumber.next(finishedLoadingNumber.getValue()+1);
      });

      var userTerm = "";
      if(term[0] == '@'){
        userTerm = term;
      } else {
        userTerm = "@" + term;
      }

      //user name search as well may add more late
      this.db.list('userInfo', ref => ref.orderByChild('about/search/userName').limitToFirst(10).startAt(userTerm).endAt(userTerm + "\uf8ff")).valueChanges().subscribe((result:any[]) => {
         userNames = result;
         finishedLoadingNumber.next(finishedLoadingNumber.getValue()+1);
       });

      this.lastSearchedUsers = term;
    }
    

  }


  onBarCardClick(event,barId){
    if(event.target.id != undefined && event.target.id == "like") return;
    console.log(barId);
    this.barSlide = true;
    this.showBarPage = true;
    this.barPageId = barId;
    this.mainService.toggleBarSlideSearch();
  }

  likeBar(barCard){

  }

  checkLikedStatus(barCard){

  }

  openFriendPopUp(userRawData) {
    var newUser: User = new User();
    newUser.setFriendData(userRawData);
    this.mainService.activateFriendPopUp(newUser);
  }

}
