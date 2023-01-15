import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from '../login-ventana/login.service';
import { Skills } from './skills-model';
import { SkillsServicioService } from './skills-servicio.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  public listaSkill:Skills[]=[];
  public actualizaSkill:Skills | undefined
  public borraSkill:Skills | undefined

  constructor(private skillsServicio:SkillsServicioService,
    private loginService:LoginService) { }

  ngOnInit(): void {
    this.getSkills();
  }

  public getSkills():void{
    this.skillsServicio.getSkills().subscribe({
      next:(Response: Skills[])=>{
        this.listaSkill=Response;
      },
      error:(error:HttpErrorResponse)=>{
        alert(error.message);
      }
    })
  }

  public agregaSkills(addForm:NgForm){
    document.getElementById('agregaSkillsForm')?.click();
    this.skillsServicio.agregaSkills(addForm.value).subscribe({
      next:(response:Skills) =>{
        console.log(response);
        this.getSkills();
        addForm.resetForm();
      },
      error:(error:HttpErrorResponse)=>{
        alert(error.message);
        addForm.reset();
      }
    })
  }

  public actualizaSkills(editForm:Skills){
    this.actualizaSkill=editForm;
    document.getElementById('actualizarSkillsForm')?.click();
    this.skillsServicio.actualizaSkills(editForm).subscribe({
      next:(response:Skills) =>{
        console.log(response);
        this.getSkills();
      },
      error:(error:HttpErrorResponse)=>{
        alert(error.message);
      }
    })
  }

  public borraSkills(idSkill:number):void{
      this.skillsServicio.borraSkills(idSkill).subscribe({
      next:(response:void) =>{
        console.log(response);
        this.getSkills();
      },
      error:(error:HttpErrorResponse)=>{
        alert(error.message);
      }
    })
  }

  public abreModal(mode:string, skills?:Skills):void{
    const container=document.getElementById('main-container');
    const button=document.createElement('button');
    button.style.display='none';
    button.setAttribute('data-bs-toggle', 'modal');
    if(mode==='agregar'){
      button.setAttribute('data-bs-target', '#agregaSkillModal');
    }else if (mode==='borrar'){
      this.borraSkill=skills;
      button.setAttribute('data-bs-target', '#borraSkillModal')
    }else if (mode==='actualizar'){
      this.actualizaSkill=skills;
      button.setAttribute('data-bs-target', '#actualizaSkillModal')
    }
    container?.appendChild(button);
    button.click();
  }

  estaLogueado(){
    return this.loginService.estaLogueado();
  }


}
