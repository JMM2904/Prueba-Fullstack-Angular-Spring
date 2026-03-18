import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { DatosService } from './datos.service';
import { Videojuego } from './models/videojuego';

@Component({
  selector: 'app-videojuegos',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h2>Videojuegos</h2>
    <ul>
      <li *ngFor="let juego of videojuegos$ | async">
        {{ juego.titulo }} - {{ juego.horas }} hrs
      </li>
    </ul>
  `
})
export class VideojuegosComponent implements OnInit {
  videojuegos$!: Observable<Videojuego[]>;

  constructor(private service: DatosService) {}

  ngOnInit(): void {
    this.videojuegos$ = this.service.getVideojuegos();
  }
}
