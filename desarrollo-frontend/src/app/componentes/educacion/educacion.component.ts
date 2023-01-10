import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Educacion } from './educacion-model';
import { EducacionServicioService } from './educacion-servicio.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  public listaEduc:Educacion[]=[];
  public actualizaEduc:Educacion | undefined
  public borraEduc:Educacion | undefined

  constructor(private educacionServicio:EducacionServicioService) { }

  ngOnInit(): void {
    this.getEducacion();
  }

  public getEducacion():void{
    this.educacionServicio.getEducacion().subscribe({
      next:(Response: Educacion[])=>{
        this.listaEduc=Response;
      },
      error:(error:HttpErrorResponse)=>{
        alert(error.message);
      }
    })
  }

  public agregaEducacion(addForm:NgForm){
    document.getElementById('agregaEducacionForm')?.click();
    this.educacionServicio.agregaEducacion(addForm.value).subscribe({
      next:(response:Educacion) =>{
        console.log(response);
        this.getEducacion();
        addForm.resetForm();
      },
      error:(error:HttpErrorResponse)=>{
        alert(error.message);
        addForm.reset();
      }
    })
  }

  public actualizaEducacion(editForm:Educacion){
    this.actualizaEduc=editForm;
    document.getElementById('actualizarEducacionForm')?.click();
    this.educacionServicio.actualizaEducacion(editForm).subscribe({
      next:(response:Educacion) =>{
        console.log(response);
        this.getEducacion();
      },
      error:(error:HttpErrorResponse)=>{
        alert(error.message);
      }
    })
  }

  public borraEducacion(idEduc:number):void{
      this.educacionServicio.borraEducacion(idEduc).subscribe({
      next:(response:void) =>{
        console.log(response);
        this.getEducacion();
      },
      error:(error:HttpErrorResponse)=>{
        alert(error.message);
      }
    })
  }

  public abreModal(mode:string, educacion?:Educacion):void{
    const container=document.getElementById('main-container');
    const button=document.createElement('button');
    button.style.display='none';
    button.setAttribute('data-bs-toggle', 'modal');
    if(mode==='agregar'){
      button.setAttribute('data-bs-target', '#agregaEducModal');
    }else if (mode==='borrar'){
      this.borraEduc=educacion;
      button.setAttribute('data-bs-target', '#borraEducModal')
    }else if (mode==='actualizar'){
      this.actualizaEduc=educacion;
      button.setAttribute('data-bs-target', '#actualizaEducModal')
    }
    container?.appendChild(button);
    button.click();
  }
}
