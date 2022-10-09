import { Component, Input, OnInit } from '@angular/core';
import { Juego } from 'src/app/interfaces/juego';
import { JuegosService } from 'src/app/servicios/juegos.service';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {

  @Input() titulo:string = '';
  public contador:number = 0;
  public nombresFav:string[] = [];
  public elementosMenu: any[] = [
    {
      ruta: '/inicio',
      nombre: 'Inicio',
      activo: false 
    },
    {
      ruta: '/info',
      nombre: 'Info',
      activo: false
    },
    {
      ruta: '/buscar',
      nombre: 'Buscar',
      activo: false
    },
    {
      ruta: '/galeria',
      nombre: 'Galería',
      activo: false
    }
  ];

  constructor(private _juegosService:JuegosService) { }

  ngOnInit(): void {
    this.elementosMenu.forEach(elemento=>{
      elemento.activo=elemento.nombre==this.titulo;
    });
      this._juegosService.eventoFavoritos.subscribe((datos:Juego)=>{
        console.log('datos',datos);
        if(!this.nombresFav.includes(datos.title)){
          this.nombresFav.push(datos.title);
          
        }
        else {
          this.nombresFav = this.nombresFav.filter((elemento)=>{
            return datos.title!=elemento;
          });
          this.contador--;
        }
        
      });

      }
  }


