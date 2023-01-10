import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class LoginService{

  constructor(
    private router:Router,
    private cookieService:CookieService

    ){

  }

  token:string=""

  login(email:string, password:string): void{

    firebase.auth().signInWithEmailAndPassword(email, password).then(

      response=>{
        firebase.auth().currentUser?.getIdToken().then(
          token=>{
            this.token=token;
            this.cookieService.set("token",this.token);
            this.router.navigate(['/']);

          }
        )
      }
    );
  }

getIdToken(){
  //return this.token;
  return this.cookieService.get("token");
}

estaLogueado(){
  //return this.token;
  return this.cookieService.get("token");

}

Logout(){

  firebase.auth().signOut().then(()=>{
    this.token="";
   this.cookieService.set("token",this.token);
    this.router.navigate(['/']);
    window.location.reload;
  })

}

}
