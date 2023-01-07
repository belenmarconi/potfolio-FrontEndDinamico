import { Component, OnInit } from '@angular/core';
import firebase from 'firebase/compat/app'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(){

  }

  ngOnInit(): void {

   firebase.initializeApp({
    apiKey: "AIzaSyCfRbSqBHfz23dWeyK_rP0Dn9esNhUqnRo",
    authDomain: "argprograma-integrador.firebaseapp.com",

   });

  }


}
