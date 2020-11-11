import { Component, OnInit } from '@angular/core';

// import de parametros de ruta
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario-nuevo',
  template: `
    <p>
      usuario-nuevo works!
    </p>
    <h3>Child Component 1</h3>
    <h3>parent user id = {{ userId.id }}</h3>
    <h4>revisar como se obtienen los params en usuario-nuevo.component.ts para child y en usuario.component.ts para parent</h4>
    <h5>Revisar en consola las directivas de lifecycle y sus interacciones con los eventos del dom </h5>

  `,
  styles: [
  ]
})
export class UsuarioNuevoComponent implements OnInit {

  userId: any;

  constructor( private roterParams: ActivatedRoute ) {

    this.roterParams.parent.params.subscribe( parametros => {  // prestar atencion al .parent como trae los parametros

      console.log('Ruta Child de usuario nuevo');
      console.log(parametros);
      this.userId = parametros;

    });

  }

  ngOnInit(): void {
  }

}
