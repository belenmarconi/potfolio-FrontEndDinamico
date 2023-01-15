import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginService } from './login.service';


@Component({
  selector: 'app-login-ventana',
  templateUrl: './login-ventana.component.html',
  styleUrls: ['./login-ventana.component.css']
})
export class LoginVentanaComponent implements OnInit {

  todoForm: FormGroup | undefined;
  formBuilder: any;

  constructor(private LoginService:LoginService, private modalService: NgbModal, public activeModal: NgbActiveModal) { }



  ngOnInit(): void {

  }

  login(form:NgForm){
    const email=form.value.email;
    const password=form.value.password;
    this.LoginService.login(email, password);
    this.activeModal.close()

  }



}
