import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
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
  private apiUrl = 'https://localhost:7086/api/clientes/sp';

  constructor(private http: HttpClient) {}

  obtenerClientes(page: number, pageSize: number): Observable<Cliente[]> {
    let params = new HttpParams().set('page', page.toString()).set('pageSize', pageSize.toString());
    return this.http.get<Cliente[]>(this.apiUrl, { params });
  }
}