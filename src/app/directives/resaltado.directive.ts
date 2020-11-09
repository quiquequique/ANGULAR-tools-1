import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { stringify } from 'querystring';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  constructor(private elRef: ElementRef) {
    console.log('directiva conectada');
    // elRef.nativeElement.style.backgroundColor = 'orange';
  }

  @Input( 'appResaltado' ) nuevoColor: string;

   @HostListener('mouseenter') mouseEntro(){
     console.log(this.nuevoColor);

     this.resaltar( this.nuevoColor || 'blue' );

   }
   @HostListener('mouseleave') mouseSalio(){
    this.resaltar( null ); // null es un string valido en js
   }

   private resaltar( color: string ){
    this.elRef.nativeElement.style.backgroundColor = color;
   }
}
