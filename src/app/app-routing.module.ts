import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { ContactoComponent } from './pages/contacto/contacto.component';



const routes: Routes = [
   { path: 'inicio', component: InicioComponent },
   { path: 'productos', component: ProductosComponent },
   { path: 'nosotros', component: NosotrosComponent },
   { path: 'contacto', component: ContactoComponent },
   { path: '**', redirectTo: 'productos', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }