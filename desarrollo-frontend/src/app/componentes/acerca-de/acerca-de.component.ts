import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AcercadeServicioService } from './acercade-servicio.service';
import { Usuario } from './usuario-model';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {

  public usuario:Usuario | undefined;
  public editUsuario:Usuario | undefined

  constructor(private acercadeservice : AcercadeServicioService) { }

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

}
