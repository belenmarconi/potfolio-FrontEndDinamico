import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Usuario } from './usuario-model';

@Injectable({
  providedIn: 'root'
})
export class AcercadeServicioService {
  private apiServerUrl=environment.apiBaseURl;

  constructor(private http:HttpClient) { }

  public getUsuario():Observable<Usuario>{
    return this.http.get<Usuario>(`${this.apiServerUrl}/usuario/id/1`)
  }

  public actualizaUsuario(usuario:Usuario):Observable<Usuario>{
    return this.http.put<Usuario>(`${this.apiServerUrl}/actualiza`, usuario);
  }
}
