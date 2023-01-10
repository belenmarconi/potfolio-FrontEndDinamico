import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { Educacion } from './educacion-model';

@Injectable({
  providedIn: 'root'
})
export class EducacionServicioService {
  private apiServerUrl=environment.apiBaseURl;

  constructor(private http:HttpClient) { }

  public getEducacion():Observable<Educacion[]>{
    return this.http.get<Educacion[]>(`${this.apiServerUrl}/educacion/getall`);
  }

  public agregaEducacion(educacion:Educacion):Observable<Educacion>{
    return this.http.post<Educacion>(`${this.apiServerUrl}/educacion/agregar`, educacion);
  }

  public actualizaEducacion(educacion:Educacion):Observable<Educacion>{
    return this.http.put<Educacion>(`${this.apiServerUrl}/educacion/actualiza`, educacion);
  }

  public borraEducacion(educacionId:number):Observable<void>{
    return this.http.delete<void>(`${this.apiServerUrl}/educacion/borrar/${educacionId}`);
  }


}
