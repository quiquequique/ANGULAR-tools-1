import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuario-detalle',
  template: `
    <p>
      usuario-detalle works!
    </p>
    <h3>Child Component 3</h3>
  `,
  styles: [
  ]
})
export class UsuarioDetalleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
