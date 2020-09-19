import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class UsuariosService {

  constructor(  private http:HttpClient ) { }

   getUsuario(){
    return this.http.get("https://randomuser.me/api/");
   }

   getUsuarios(){
       return this.http.get("https://randomuser.me/api/?results=500");
   }



}
