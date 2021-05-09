import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';
@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: [
  ]
})
export class BreadcrumbsComponent implements OnDestroy, OnInit {

  public titulo: string = '';
  public tituloSuvs$?: Subscription;

  constructor(private router: Router) {

  }
  ngOnInit(): void {
    this.tituloSuvs$ = this.getArgumentsRuta().
      subscribe(({ titulo }) => {
        if (titulo == undefined) {
          this.titulo = 'Inicio';
        } else {
          this.titulo = titulo;
        }

        document.title = this.titulo;
      })
  }

  ngOnDestroy(): void {
    this.tituloSuvs$?.unsubscribe();
  }

  getArgumentsRuta() {
    return this.router.events.pipe(
      filter((event): event is ActivationEnd => event instanceof ActivationEnd),
      filter((event: ActivationEnd) => event.snapshot.firstChild === null),
      map((event: ActivationEnd) => event.snapshot.data),
    );
  }

}
