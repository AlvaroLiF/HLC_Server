import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'miFecha'
})
export class MiFechaPipe implements PipeTransform {
  public meses:string[] = ['enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre']
  transform(value: string, formato?: string): string {
    if(value==null || value==''){
      return '';
    }
    if(formato!=null && formato=='long'){
      let datos = value.split('-');
      return datos[2] + ' de ' +this.meses[Number(datos[1])-1] + ' de ' + datos[0]
    }
    return value.split('-').reverse().join('-');
  }

}
