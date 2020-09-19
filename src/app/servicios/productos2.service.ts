import { Injectable } from '@angular/core';


@Injectable({
    providedIn: 'root'
  })  
export class Productos2Service {

    private productos:ProductosInterface[] = [
        {
          id: 1,
          nombre: "Casual Sport Shoes 1",
          img: "assets/img/1.jpg",
          precio: 100,
          categoria:"Calzado"
        },
        {
            id: 2,
            nombre: "Casual Sport Shoes 2",
            img: "assets/img/2.jpg",
            precio: 90,
            categoria:"Calzado"
          },
          {
            id: 3,
            nombre: "Casual Sport Shoes 3",
            img: "assets/img/3.jpg",
            precio: 80,
            categoria:"Calzado"
          },
          {
            id: 4,
            nombre: "Casual Sport Shoes 4",
            img: "assets/img/4.jpg",
            precio: 70,
            categoria:"Calzado"
          },
          // {
          //   id: 5,
          //   nombre: "Rollers",
          //   img: "assets/img/5.jpg",
          //   precio: 110,
          //   categoria:"Deporte"
          // },
          // {
          //   id: 6,
          //   nombre: "Full Frame Camera",
          //   img: "assets/img/6.jpg",
          //   precio: 210,
          //   categoria:"Hardware"
          // },
          // {
          //   id: 7,
          //   nombre: "Monitor",
          //   img: "assets/img/7.jpg",
          //   precio: 200,
          //   categoria:"Hardware"
          // },
          // {
          //   id: 8,
          //   nombre: "Big Sale!",
          //   img: "assets/img/8.jpg",
          //   precio: 0,
          //   categoria:"Banner"
          // },    
     
      ];

    constructor() { 
        console.log("Servicio Listo");
    }


    getProductos():ProductosInterface[]{ 
        return this.productos;
    }  
    
}

export interface ProductosInterface{
    id: number,
    nombre: string,
    img: string,
    precio: number,
    categoria:string
}