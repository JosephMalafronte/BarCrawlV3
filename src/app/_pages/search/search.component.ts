import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchString:string = "";
  activeSearchPage: number = 0;

  constructor(private db: AngularFireDatabase) { }

  ngOnInit() {

  }

  activeNavIcon(index: number){
    if(this.activeSearchPage == index) return true;
    return false;
  }

  setActiveSearchPage(index: number){
    if(index == this.activeSearchPage) return;
    this.activeSearchPage = index;
  }


  focus(){
    document.getElementById('subject').focus();
    document.getElementById('subject').addEventListener('keyup',function(e){
      if (e.which == 13) this.blur();
  });
  }

  search(){
    var term = this.searchString;

    //https://angularfirebase.com/lessons/autocomplete-search-with-angular4-and-firebase/
    //https://stackoverflow.com/questions/40471284/firebase-search-by-child-value
    this.db.list('barPages', ref => ref.orderByChild('barName').equalTo(term)).valueChanges().subscribe(result => {
      console.log(result);
    });

  }

}
