import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'dashboard',
  },
  {
    path: 'dashboard',
    title: 'Orlando Weather Forecast',
    loadComponent: () => import('./pages/dashboard/dashboard').then((module) => module.Dashboard),
  },
  {
    path: '**',
    redirectTo: 'dashboard',
  },
];
