
import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { FormsModule } from '@angular/forms';
import { AuthService} from '../../_services/auth.service';
import {MainService} from '../../_services/main.service';
import { User } from '../../_models/User.Model';


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

      this.db.list('userInfo', ref => ref.orderByChild('about/firstName').limitToFirst(10).startAt(term).endAt(term + "\uf8ff")).valueChanges().subscribe((result:any[]) => {
        console.log(result);
        for(var i=0; i<result.length;i++){
          if(result[i].about.userName == this.auth.currentUser.userName){
            result.splice(i,1);
            break;
          }
        }
        this.userResults = result;
        this.lastSearchedUsers = term;
      });
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
