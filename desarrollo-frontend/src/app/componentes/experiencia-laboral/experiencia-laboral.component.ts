import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from '../login-ventana/login.service';
import { Experiencia } from './experiencia-model';
import { ExplaboralServicioService } from './explaboral-servicio.service';

@Component({
  selector: 'app-experiencia-laboral',
  templateUrl: './experiencia-laboral.component.html',
  styleUrls: ['./experiencia-laboral.component.css']
})
export class ExperienciaLaboralComponent implements OnInit {
  public listaExp:Experiencia[]=[];
  public actualizaExp:Experiencia | undefined
  public borraExp:Experiencia | undefined

  constructor(private experienciaServicio:ExplaboralServicioService,
    private loginService:LoginService) { }

  ngOnInit(): void {
    this.getExperiencia();
  }

  public getExperiencia():void{
    this.experienciaServicio.getExperiencia().subscribe({
      next:(Response: Experiencia[])=>{
        this.listaExp=Response;
      },
      error:(error:HttpErrorResponse)=>{
        alert(error.message);
      }
    })
  }

  public agregaExperiencia(addForm:NgForm){
    document.getElementById('agregaExperienciaForm')?.click();
    this.experienciaServicio.agregaExperiencia(addForm.value).subscribe({
      next:(response:Experiencia) =>{
        console.log(response);
        this.getExperiencia();
        addForm.resetForm();
      },
      error:(error:HttpErrorResponse)=>{
        alert(error.message);
        addForm.reset();
      }
    })
  }

  public actualizaExperiencia(editForm:Experiencia){
    this.actualizaExp=editForm;
    document.getElementById('actualizarExperienciaForm')?.click();
    this.experienciaServicio.actualizaExperiencia(editForm).subscribe({
      next:(response:Experiencia) =>{
        console.log(response);
        this.getExperiencia();
      },
      error:(error:HttpErrorResponse)=>{
        alert(error.message);
      }
    })
  }

  public borraExperiencia(idExp:number):void{
      this.experienciaServicio.borraExperiencia(idExp).subscribe({
      next:(response:void) =>{
        console.log(response);
        this.getExperiencia();
      },
      error:(error:HttpErrorResponse)=>{
        alert(error.message);
      }
    })
  }

  public abreModal(mode:string, experiencia?:Experiencia):void{
    const container=document.getElementById('main-container');
    const button=document.createElement('button');
    button.style.display='none';
    button.setAttribute('data-bs-toggle', 'modal');
    if(mode==='agregar'){
      button.setAttribute('data-bs-target', '#agregaExpModal');
    }else if (mode==='borrar'){
      this.borraExp=experiencia;
      button.setAttribute('data-bs-target', '#borraExpModal')
    }else if (mode==='actualizar'){
      this.actualizaExp=experiencia;
      button.setAttribute('data-bs-target', '#actualizaExpModal')
    }
    container?.appendChild(button);
    button.click();
  }

  estaLogueado(){
    return this.loginService.estaLogueado();
  }
}
