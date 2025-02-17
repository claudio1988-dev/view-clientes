import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientesService, Cliente } from '../../services/clientes.service';
import { FormatoTelefonoPipe } from '../../pipes/formato-telefono.pipe';

@Component({
  selector: 'app-clientes-list',
  standalone: true,
  imports: [CommonModule, FormatoTelefonoPipe],
  templateUrl: './clientes-list.component.html',
  styleUrls: ['./clientes-list.component.css']
})
export class ClientesListComponent implements OnInit {
  clientes: Cliente[] = [];

  constructor(private clientesService: ClientesService) {}

  ngOnInit(): void {
    this.clientesService.obtenerClientes().subscribe({
      next: (data) => {
        this.clientes = data;
      },
      error: (err) => {
        console.error('Error al obtener los clientes', err);
      }
    });
  }
}
