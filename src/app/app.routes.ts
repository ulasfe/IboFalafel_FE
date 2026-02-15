import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'music',
    pathMatch: 'full'
  },
  {
    path: 'music',
    loadComponent: () =>
      import('./pages/music/music.component')
        .then(m => m.MusicComponent)
  },
  {
    path: 'acting',
    loadComponent: () =>
      import('./pages/acting/acting.component')
        .then(m => m.ActingComponent)
  },
  {
    path: 'art',
    loadComponent: () =>
      import('./pages/art/art.component')
        .then(m => m.ArtComponent)
  }
];
