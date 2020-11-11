import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
     <app-ng-style></app-ng-style>
    <hr>
    <app-css></app-css>
    <p>parrafo en componente padre toma css de su componente</p>
    <br>
    <hr>
    <app-clases></app-clases>
    <br>
    <div [appResaltado]="'orange'" class="container p-5">
        <h4>
            aplicar directiva personalizada con parametro declarado desde el html (hacer mouseenter)
        </h4>
    </div>
    <hr>
    <br>
    <app-ng-switch></app-ng-switch>
    <br>
  `,
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
