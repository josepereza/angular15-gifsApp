import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, PokeAPIResponse } from './interfaces/gif.interface';

@Injectable({
  providedIn: 'root',
})
export class Gifservice {
  private _historial: string[] = [];
  public _mibusqueda: Gif[] = [];
  get mibusqueda() {
    return this._mibusqueda;
  }
  get historial() {
    return [...this._historial];
  }
  buscarGifs(query: string) {
    query = query.trim().toLocaleLowerCase();

    if (!this._historial.includes(query)) {
      this._historial.unshift(query);
      this._historial = this._historial.splice(0, 10);
    }
    const params=new HttpParams()
    .set('api_key','tuApi')
    .set('q', query)
    .set('limit','25')
    .set('offset','0');
    
    return this.http.get<PokeAPIResponse>(
      `https://api.giphy.com/v1/gifs/search`,{params}
    );
  }
  constructor(private http: HttpClient) {}
}
