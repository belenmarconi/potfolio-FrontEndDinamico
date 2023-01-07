import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login-ventana',
  templateUrl: './login-ventana.component.html',
  styleUrls: ['./login-ventana.component.css']
})
export class LoginVentanaComponent implements OnInit {



  constructor(private LoginService:LoginService) { }



  ngOnInit(): void {
  }

  login(form:NgForm){
    const email=form.value.email;
    const password=form.value.password;

    this.LoginService.login(email, password);

  }

}
