import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from '../login-ventana/login.service';
import { AcercadeServicioService } from './acercade-servicio.service';
import { Usuario } from './usuario-model';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {

  public usuario:Usuario | undefined;
  public actualizaUser:Usuario | undefined

  constructor(
    private acercadeservice : AcercadeServicioService,
    private loginService:LoginService) { }

  ngOnInit(): void {
    this.getUsuario();
  }

  public getUsuario():void{
    this.acercadeservice.getUsuario().subscribe({
      next: (response:Usuario) =>{
        this.usuario=response;
      },
      error:(error:HttpErrorResponse)=>{
        alert(error.message);
      }
    })

  }

  public actualizaUsuario(editForm:Usuario){
    this.actualizaUser=editForm;
    document.getElementById('actualizarUsuarioForm')?.click();
    this.acercadeservice.actualizaUsuario(editForm).subscribe({
      next:(response:Usuario) =>{
        console.log(response);
        this.getUsuario();
      },
      error:(error:HttpErrorResponse)=>{
        alert(error.message);
      }
    })
  }


  public abreModal(mode:string, usuario?:Usuario):void{
    const container=document.getElementById('main-container');
    const button=document.createElement('button');
    button.style.display='none';
    button.setAttribute('data-bs-toggle', 'modal');
    if (mode==='actualizar'){
      this.actualizaUser=usuario;
      button.setAttribute('data-bs-target', '#actualizaUsuarioModal')
    }
    container?.appendChild(button);
    button.click();
  }

  estaLogueado(){
    return this.loginService.estaLogueado();
  }

}
