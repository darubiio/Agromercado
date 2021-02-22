import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  @Input() proDetalle: any = {}
  @Output() valor: EventEmitter<boolean>;

  constructor() { 
    this.valor = new EventEmitter();
  }

  ngOnInit(): void {
    console.log(this.proDetalle);
  }

  handleVolver(volver: any){
    this.valor.emit(volver);
  }

}