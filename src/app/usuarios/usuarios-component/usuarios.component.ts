import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../servicios/usuarios.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  usuarios:any[] = [];

  constructor( private usuariosService: UsuariosService ) {  

    usuariosService.getUsuarios().subscribe((data: any) =>{
      this.usuarios = data.results;
      console.log(this.usuarios);
    }, (err) =>{
      console.warn("Error en usuarios Service", err);
    })
  }    

  ngOnInit(): void {
  }

}
