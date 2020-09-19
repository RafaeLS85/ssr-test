import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../../servicios/items.service';
import { Productos2Service } from '../../servicios/productos2.service';
import { UsuariosService } from '../../servicios/usuarios.service';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {

  items: any[] = [];
  productos: any[] = [];
  usuarios:any;

  constructor(public productos2Service: Productos2Service, public itemsService:ItemsService, private usuariosService: UsuariosService) {
    itemsService.getProductos()    
    .subscribe((data: any) => {
      this.items = data;     
     this.items =  this.items.slice(0,4);
     console.log(this.items);
    })
   }

  ngOnInit() {
    this.productos = this.productos2Service.getProductos();
  }

}
