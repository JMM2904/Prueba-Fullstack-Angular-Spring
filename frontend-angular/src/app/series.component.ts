import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { DatosService } from './datos.service';
import { Serie } from './models/serie';

@Component({
  selector: 'app-series',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h2>Series</h2>
    <ul>
      <li *ngFor="let serie of series$ | async">
        {{ serie.titulo }} - {{ serie.temporadas }} temporadas
      </li>
    </ul>
  `
})
export class SeriesComponent implements OnInit {
  series$!: Observable<Serie[]>;

  constructor(private service: DatosService) {}

  ngOnInit(): void {
    this.series$ = this.service.getSeries();
  }
}
