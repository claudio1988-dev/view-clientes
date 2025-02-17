import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Cliente {
  id: number;
  nombre: string;
  telefono: string;
  pais: string;
}

@Injectable({
  providedIn: 'root'
})
export class ClientesService {
  
  private apiUrl = 'https://localhost:7086/api/clientes/sp'; //para probar el servicio con LINQ : https://localhost:7086/api/clientes/linq
  constructor(private http: HttpClient) {}

  obtenerClientes(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.apiUrl);
  }
}