import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Experiencia } from './experiencia-model';


@Injectable({
  providedIn: 'root'
})
export class ExplaboralServicioService {private apiServerUrl=environment.apiBaseURl;

  constructor(private http:HttpClient) { }

  public getExperiencia():Observable<Experiencia[]>{
    return this.http.get<Experiencia[]>(`${this.apiServerUrl}/experiencia/getall`);
  }

  public agregaExperiencia(experiencia:Experiencia):Observable<Experiencia>{
    return this.http.post<Experiencia>(`${this.apiServerUrl}/experiencia/agregar`, experiencia);
  }

  public actualizaExperiencia(experiencia:Experiencia):Observable<Experiencia>{
    return this.http.put<Experiencia>(`${this.apiServerUrl}/experiencia/actualiza`, experiencia);
  }

  public borraExperiencia(experienciaId:number):Observable<void>{
    return this.http.delete<void>(`${this.apiServerUrl}/experiencia/borrar/${experienciaId}`);
  }

}
