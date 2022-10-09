import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Juego } from '../interfaces/juego';

@Injectable({
  providedIn: 'root'
})
export class JuegosService {

  public eventoFavoritos:EventEmitter<Juego> = new EventEmitter();
  constructor(private _http: HttpClient) { }
  getJuegos() {
    return new Promise<Juego[]>((resolve, reject) => {
      let url: string = 'https://free-to-play-games-database.p.rapidapi.com/api/games';
      let cabeceras = {
        'X-RapidAPI-Key': 'e310d3fa0fmsh4f84bc9ee553763p1c6ef8jsn439114719c7e',
        'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
      }
      this._http.get<Juego[]>(url, {
        headers: cabeceras
      }).subscribe({
        next: (datos) => {
          resolve(datos)
        },
        error: (err:HttpErrorResponse) => {
          console.log(err)
          reject(err);
        }
      });
    });
  }
}
