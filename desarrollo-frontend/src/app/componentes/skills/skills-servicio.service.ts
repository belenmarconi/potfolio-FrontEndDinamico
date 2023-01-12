import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Skills } from './skills-model';

@Injectable({
  providedIn: 'root'
})
export class SkillsServicioService {private apiServerUrl=environment.apiBaseURl;

  constructor(private http:HttpClient) { }

  public getSkills():Observable<Skills[]>{
    return this.http.get<Skills[]>(`${this.apiServerUrl}/skills/getall`);
  }

  public agregaSkills(skills:Skills):Observable<Skills>{
    return this.http.post<Skills>(`${this.apiServerUrl}/skills/agregar`, skills);
  }

  public actualizaSkills(skills:Skills):Observable<Skills>{
    return this.http.put<Skills>(`${this.apiServerUrl}/skills/actualiza`, skills);
  }

  public borraSkills(skillsId:number):Observable<void>{
    return this.http.delete<void>(`${this.apiServerUrl}/skills/borrar/${skillsId}`);
  }


}
