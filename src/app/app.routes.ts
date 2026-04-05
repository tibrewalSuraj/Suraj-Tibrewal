import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./portfolio/portfolio.component').then((m) => m.PortfolioComponent),
  },
];
