import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { ProductosComponent } from './productos/productos.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { ContactoComponent } from './contacto/contacto.component';




const routes: Routes = [
  {
    path: 'dev',
    children: [
      {
        path: 'inicio',
        component: InicioComponent,
      },
      {
        path: 'productos',
        component: ProductosComponent,
      },
      {
        path: 'nosotros',
        component: NosotrosComponent,
      },
      {
        path: 'contactos',
        component: ContactoComponent,
      }
    ]
  },
  {
    component: InicioComponent,
    path: 'inicio'
  },
  {  path: '**', redirectTo: 'inicio' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }