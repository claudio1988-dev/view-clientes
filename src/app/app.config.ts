import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, Routes } from '@angular/router';
import { ClientesListComponent } from './components/clientes-list/clientes-list.component';

export const routes: Routes = [
  // Define your routes here
  { path: '/', component: ClientesListComponent },
];

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes)]
};
