import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', loadComponent: () => import('./components/about/about.component').then((c) => c.AboutComponent) },
  { path: 'todo', loadComponent: () => import('./components/todo/todo.component').then((c) => c.TodoComponent) },
  { path: 'form', loadComponent: () => import('./components/form/form.component').then((c) => c.FormComponent) },
  { path: '**', redirectTo: '' },
];
