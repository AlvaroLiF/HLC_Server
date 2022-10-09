import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MiFechaPipe } from './miFecha/mi-fecha.pipe';
import { FiltroPipe } from './filtro/filtro.pipe';



@NgModule({
  declarations: [
    MiFechaPipe,
    FiltroPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MiFechaPipe,
    FiltroPipe
  ]
})
export class PipesModule { }
