import { Component, OnInit } from '@angular/core';

// import de parametros de ruta
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  constructor( private roterParams: ActivatedRoute ) {

    this.roterParams.params.subscribe( parametros => {

      console.log('Ruta Padre');
      console.log(parametros);

    });

  }

  ngOnInit(): void {
  }

}
