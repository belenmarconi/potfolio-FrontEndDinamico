import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginVentanaComponent } from '../login-ventana/login-ventana.component';
import { LoginService } from '../login-ventana/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private modalService: NgbModal, private loginService:LoginService) { }

  ngOnInit(): void {
  }

  llamaVentana(){
          const modal = this.modalService.open(LoginVentanaComponent);
      modal.result.then(
        this.handleModalTodoFormClose.bind(this),
         this.handleModalTodoFormClose.bind(this));
    }

    handleModalTodoFormClose(){
       ;
    }

    estaLogueado(){
      return this.loginService.estaLogueado();
    }

    logout(){
      this.loginService.Logout();
    }

}
