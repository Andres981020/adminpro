import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Observable, retry, take, map, filter, Subscription } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [
  ]
})
export class RxjsComponent implements OnDestroy {

  public intervaloSub: Subscription | undefined;

  constructor() {

    // this.retornaObv().pipe(
    //   retry(2)
    // ).subscribe(
    //   valor => console.log('sub', valor),
    //   error => console.warn('Error:', error),
    //   () => console.info('Obse terminado')
    // );

    this.intervaloSub = this.retornaIntervalo()
      .subscribe( console.log )
  }

  ngOnDestroy(): void {
    this.intervaloSub?.unsubscribe();
  }

  retornaIntervalo () {
    const interval$ = interval(100)
    .pipe(
      map ( valor => valor + 1 ),
      filter( valor => (valor % 2 === 0) ? true: false),
      //take(4),
      );
    
    return interval$
  }

  retornaObv (): Observable<number> {
    let i = 0;

  const obs$ = new Observable<number> ( observer => {

    

    const intervalo = setInterval( () => {

      i++;
      observer.next(i);

      if ( i === 4) {
        clearInterval ( intervalo );
        observer.complete();
      }

      if ( i === 2 ) {
        observer.error('i llego al valor de 2')
      }
    }, 1000)

  });

  return obs$;
  this.retornaObv();

  }

}
