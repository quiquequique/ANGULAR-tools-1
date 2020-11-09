import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-css',
  template: `
    <p>
      scope de css solo en el componente de nombre css
    </p>
  `,
  styles: [`
  p{
    color: red;
    font-size: 25px;
  }
  `
  ]
})
export class CssComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
