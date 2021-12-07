import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: [
  ]
})
export class PromesasComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {

    this.getUsuarios().then(usuarios => {
      console.log(usuarios);
      
    });

    //   const promesa = new Promise( (resolve, rejects ) => {

    //     if ( false ) {
    //       resolve('Hola Mundo');
    //     } else {
    //       rejects('Algo salio mal');
    //     }

    //   })
    //   promesa.then( (mensaje) => {
    //     console.log(mensaje);

    //   })
    //   .catch ( error => {
    //     console.log('Error en mi promesa', error);

    //   });

    //   console.log('Fin del init');

  }

  getUsuarios() {

    const promesa = new Promise(resolve => {
      fetch('https://reqres.in/api/users')
        .then(res => res.json())
        .then(body => resolve(body.data))
    });
    //this.http.get('https://reqres.in/api/users')
    return promesa;
  }

}
