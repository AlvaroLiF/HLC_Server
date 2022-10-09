import { Component, Input, OnInit } from '@angular/core';
import { Juego } from 'src/app/interfaces/juego';
import { JuegosService } from 'src/app/servicios/juegos.service';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent implements OnInit {

  constructor(private _juegosService: JuegosService) { }
  // async await
  public cadenaBusqueda:string = '';
  public juegosObtenidos:Juego[] = [];
  public favoritos:string[] = [];
  async ngOnInit() {
    try {
      this.juegosObtenidos = await this._juegosService.getJuegos();
      //console.log('juegosObtenidos', juegosObtenidos);
      }
    catch (err: any) {
      console.log('err.message', err.message);
    }

  }
  cambia(ev:any){
    console.log(this.cadenaBusqueda);
  }
  meterEnFavoritos(datos:string){
    if(!this.favoritos.includes(datos)){
      this.favoritos.push(datos);
    }
    else {
      this.favoritos = this.favoritos.filter((elemento)=>{
        return datos!=elemento;
      })
    }
  }
}
