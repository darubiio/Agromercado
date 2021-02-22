import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(lista: any[], texto: string): any {
    if (!texto) return lista
    lista.filter(prod => prod.nombre.toLowerCase().includes(texto.toLowerCase()))
    console.log(texto);
    
  }

}
