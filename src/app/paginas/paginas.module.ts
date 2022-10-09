import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuscarComponent } from './buscar/buscar.component';
import { InicioComponent } from './inicio/inicio.component';
import { InfoComponent } from './info/info.component';
import { ComponentesModule } from '../componentes/componentes.module';
import { GaleriaComponent } from './galeria/galeria.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { PipesModule } from '../pipes/pipes.module';



@NgModule({
  declarations: [
    BuscarComponent,
    InicioComponent,
    InfoComponent,
    GaleriaComponent
  ],
  imports: [
    CommonModule,
    ComponentesModule,
    RouterModule,
    FormsModule,
    PipesModule
  ],
  exports:[
    BuscarComponent,
    InicioComponent,
    InfoComponent,
    GaleriaComponent
  ]
})
export class PaginasModule { }
