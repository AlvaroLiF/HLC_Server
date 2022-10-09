import { Pipe, PipeTransform } from '@angular/core';
import { Juego } from 'src/app/interfaces/juego';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(value: Juego[], cadena: string): Juego[] {
    if(value==null || value==undefined || value.length==0){
      return[];
    }
    return value.filter((elemento)=>{
      return elemento.title.toLowerCase().includes(cadena);
    })
  }

}
