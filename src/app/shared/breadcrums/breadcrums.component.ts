import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ActivationEnd, Router } from '@angular/router';
import { filter, map, Subscription } from 'rxjs';

@Component({
  selector: 'app-breadcrums',
  templateUrl: './breadcrums.component.html',
  styleUrls: ['./breadcrums.component.css']
})
export class BreadcrumsComponent implements OnDestroy {

  public titulo: string | undefined;
  public tituloSubs$: Subscription | undefined;

  constructor( private router: Router, private route: ActivatedRoute) {    
    
     this.tituloSubs$ = this.getArgumentos()
                           .subscribe( ({ titulo }) => {
                             this.titulo = titulo;
                             document.title = `AdminPro - ${ titulo }`;
    });
   }
  ngOnDestroy(): void {
    this.tituloSubs$?.unsubscribe();
  }

   getArgumentos() {
    return this.router.events
    .pipe(
      filter( (event): event is ActivationEnd => event instanceof ActivationEnd ),
      filter ( (event: ActivationEnd) => event.snapshot.firstChild === null ),
      map( (event: ActivationEnd) => event.snapshot.data)  
    )
      
   }

}
