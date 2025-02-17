import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatoTelefono'
})
export class FormatoTelefonoPipe implements PipeTransform {

  transform(value: string): string {
    if (!value) return '';
    value = value.replace(/\D/g, ''); 
    return `+${value.substring(0, 3)} ${value.substring(3, 7)} ${value.substring(7, 11)} ${value.substring(9, 13)}`;
  }
}
