import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio/inicio.component';
import { ProductosComponent } from './productos/productos.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { ContactoComponent } from './contacto/contacto.component';
import { PagesRoutingModule } from './pages-routing.module';
import { JwPaginationComponent } from 'jw-angular-pagination';


@NgModule({
  declarations: [InicioComponent, ProductosComponent, NosotrosComponent, ContactoComponent, JwPaginationComponent],
  imports: [
    CommonModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
