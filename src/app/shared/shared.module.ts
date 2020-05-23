import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { PipesComponent } from './pipes/pipes.component';



@NgModule({
  declarations: [NavbarComponent, PipesComponent],
  imports: [
    CommonModule
  ],
  providers: [],
  exports: [NavbarComponent],
})
export class SharedModule { }
