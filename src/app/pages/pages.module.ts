import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio/inicio.component';
import { ProductosComponent } from './productos/productos.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { ContactoComponent } from './contacto/contacto.component';



@NgModule({
  declarations: [InicioComponent, ProductosComponent, NosotrosComponent, ContactoComponent],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
