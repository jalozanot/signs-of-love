import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { PipesComponent } from './pipes/pipes.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [NavbarComponent, PipesComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  providers: [],
  exports: [NavbarComponent],
})
export class SharedModule { }
