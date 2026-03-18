import { Routes } from '@angular/router';
import { PersonasComponent } from './personas.component';
import { SeriesComponent } from './series.component';
import { VideojuegosComponent } from './videojuegos.component';

export const routes: Routes = [
  { path: 'personas', component: PersonasComponent },
  { path: 'series', component: SeriesComponent },
  { path: 'videojuegos', component: VideojuegosComponent },
  { path: '', redirectTo: 'personas', pathMatch: 'full' },
  { path: '**', redirectTo: 'personas', pathMatch: 'full' }
];
