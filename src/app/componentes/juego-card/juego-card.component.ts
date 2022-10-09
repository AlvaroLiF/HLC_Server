import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Juego } from 'src/app/interfaces/juego';
import { JuegosService } from 'src/app/servicios/juegos.service';

@Component({
  selector: 'app-juego-card',
  templateUrl: './juego-card.component.html',
  styleUrls: ['./juego-card.component.css']
})
export class JuegoCardComponent implements OnInit {

  constructor(private _juegosService:JuegosService) { }
  @Input() juego!: Juego;
  @Output() notificaCambio:EventEmitter<string> = new EventEmitter();

  public favorito: boolean = false;
  ngOnInit(): void {
  }
  veAWeb(url: string) {
    window.open(url, "_blank");
  }
  cambia(ev:any){
    this.notificaCambio.emit(this.juego.title);
    this._juegosService.eventoFavoritos.emit(this.juego);
  }
}
