import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  template: `
    <p [style.fontSize.px]="fSize">
      ng style reaccionando a evento click
    </p>
    <button class="btn btn-primary mr-1" (click)="fSize = fSize + 5">
      <i class='fa fa-plus'> </i>
    </button>
    <button class="btn btn-primary" (click)="fSize = fSize - 5">
      <i class="fa fa-minus"> </i>
    </button>
  `,
  styles: [
  ]
})
export class NgStyleComponent implements OnInit {

  fSize: number = 20;

  constructor() { }

  ngOnInit(): void {
  }

}
