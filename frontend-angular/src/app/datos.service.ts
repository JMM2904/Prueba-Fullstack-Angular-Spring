import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Persona } from './models/persona';
import { Serie } from './models/serie';
import { Videojuego } from './models/videojuego';
import { environment } from '../environments/environment';

@Injectable({ providedIn: 'root' })
export class DatosService {

  // ✅ Definimos apiUrl dentro de la clase
  private apiUrl = environment.apiUrl;
  
  constructor(private http: HttpClient) {}

  getPersonas(): Observable<Persona[]> {
    return this.http.get<Persona[]>(`${this.apiUrl}/personas`);
  }

  getSeries(): Observable<Serie[]> {
    return this.http.get<Serie[]>(`${this.apiUrl}/series`);
  }

  getVideojuegos(): Observable<Videojuego[]> {
    return this.http.get<Videojuego[]>(`${this.apiUrl}/videojuegos`);
  }
}
