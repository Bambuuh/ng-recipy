import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyAyZ66EbjtxRLiOyl-PE5XF5XRVJy33M5c",
      authDomain: "ng-recipe-book-2a918.firebaseapp.com",
    })
  }

}
