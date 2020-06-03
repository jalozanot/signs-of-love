import { Component, OnInit } from '@angular/core';
import { Productos } from '../../core/model/productos';


@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {


  public  productosArray: Productos[] = [
    {nombre: 'prueba', precio: 2.5, url_img: './assets/img/prueba-d.jpg'},
    {nombre: 'prueba', precio: 2.5, url_img: './assets/img/contactos_1.png'},
    {nombre: 'prueba', precio: 2.5, url_img: './assets/img/contactos_1.png'},
    {nombre: 'prueba', precio: 2.5, url_img: './assets/img/contactos_1.png'},
    {nombre: 'prueba', precio: 2.5, url_img: './assets/img/contactos_1.png'},
  ];


  constructor() { }

  ngOnInit() {
  }

}
