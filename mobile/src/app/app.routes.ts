import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'lista-salas',
    loadComponent: () => import('./pages/lista-salas/lista-salas.page').then( m => m.ListaSalasPage)
  },
  {
    path: 'criar-sala',
    loadComponent: () => import('./pages/criar-sala/criar-sala.page').then( m => m.CriarSalaPage)
  },
];
