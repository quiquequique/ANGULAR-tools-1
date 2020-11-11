import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuario-nuevo',
  template: `
    <p>
      usuario-nuevo works!
    </p>
    <h3>Child Component 1</h3>
  `,
  styles: [
  ]
})
export class UsuarioNuevoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
