import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemsService } from 'src/app/servicios/items.service';
import { Productos2Service } from 'src/app/servicios/productos2.service'; 

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {
 
  id;
  items: any[] = [];
  productos: any[] = [];

  constructor(private activatedRoute:ActivatedRoute,
    public productos2Service:Productos2Service,
    public itemsService:ItemsService) { 
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(this.id);

    itemsService.getProductos()    
    .subscribe((data: any) => {
      this.items = data;     
     this.items =  this.items.slice(0,4);
     console.log(this.items);
    });
  }

  ngOnInit() {
    this.productos = this.productos2Service.getProductos();
  }

}
