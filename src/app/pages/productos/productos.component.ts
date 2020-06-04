import { Component, OnInit } from '@angular/core';
import { Productos } from '../../core/model/productos';


@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

    items = [];
    pageOfItems: Array<any>;


  public productosArray: Productos[];
  public detalleProducto: Productos;

  constructor() { }

  ngOnInit() {

    this.items = [
      {nombre: 'prueba', precio: 2.5, url_img: './assets/img/contactos_1.png'},
      {nombre: 'prueba', precio: 2.5, url_img: './assets/img/contactos_1.png'},
      {nombre: 'prueba', precio: 2.5, url_img: './assets/img/contactos_1.png'},
      {nombre: 'prueba', precio: 2.5, url_img: './assets/img/contactos_1.png'},
      {nombre: 'prueba', precio: 2.5, url_img: './assets/img/contactos_1.png'},
      {nombre: 'prueba', precio: 2.5, url_img: './assets/img/contactos_1.png'},
      {nombre: 'prueba', precio: 2.5, url_img: './assets/img/contactos_1.png'},
      {nombre: 'prueba', precio: 2.5, url_img: './assets/img/contactos_1.png'},
      {nombre: 'prueba', precio: 2.5, url_img: './assets/img/contactos_1.png'},
      {nombre: 'prueba', precio: 2.5, url_img: './assets/img/contactos_1.png'},
      {nombre: 'prueba', precio: 2.5, url_img: './assets/img/contactos_2.png'},
      {nombre: 'prueba', precio: 2.5, url_img: './assets/img/contactos_2.png'},
      {nombre: 'prueba', precio: 2.5, url_img: './assets/img/contactos_2.png'},
      ];

}

onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    this.pageOfItems = pageOfItems;
}


public prueba(indice: Productos) {

  this.detalleProducto = indice;

}

}
