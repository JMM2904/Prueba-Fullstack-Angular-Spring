import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { DatosService } from './datos.service';
import { Persona } from './models/persona';

@Component({
  selector: 'app-personas',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h2>Personas</h2>
    <ul>
      <li *ngFor="let persona of personas$ | async">
        {{ persona.nombre }} ({{ persona.edad }})
      </li>
    </ul>
  `
})
export class PersonasComponent implements OnInit {
  personas$!: Observable<Persona[]>;

  constructor(private service: DatosService) {}

  ngOnInit(): void {
    this.personas$ = this.service.getPersonas();
  }
}
