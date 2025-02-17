import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { ClientesService, Cliente } from '../../services/clientes.service';
import { FormatoTelefonoPipe } from '../../pipes/formato-telefono.pipe';

@Component({
  selector: 'app-clientes-list',
  templateUrl: './clientes-list.component.html',
  styleUrls: ['./clientes-list.component.css'],
  standalone: true,
  imports: [CommonModule, NgxPaginationModule, FormatoTelefonoPipe]
})
export class ClientesListComponent implements OnInit {
  clientes: Cliente[] = [];
  page: number = 1;
  pageSize: number = 10;
  totalItems: number = 0;

  constructor(private clientesService: ClientesService) {}

  ngOnInit(): void {
    this.cargarClientes();
  }

  cargarClientes(): void {
    this.clientesService.obtenerClientes(this.page, this.pageSize).subscribe(data => {
      this.clientes = data;
      this.totalItems = data.length; 
    });
  }

  onPageChange(event: number): void {
    this.page = event;
    this.cargarClientes();
  }
}
