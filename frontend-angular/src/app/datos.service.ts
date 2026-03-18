import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Persona } from './models/persona';
import { Serie } from './models/serie';
import { Videojuego } from './models/videojuego';

const API_BASE = 'http://localhost:8080';

@Injectable({ providedIn: 'root' })
export class DatosService {
  constructor(private http: HttpClient) {}

  getPersonas(): Observable<Persona[]> {
    return this.http.get<Persona[]>(`${API_BASE}/personas`);
  }

  getSeries(): Observable<Serie[]> {
    return this.http.get<Serie[]>(`${API_BASE}/series`);
  }

  getVideojuegos(): Observable<Videojuego[]> {
    return this.http.get<Videojuego[]>(`${API_BASE}/videojuegos`);
  }
}
