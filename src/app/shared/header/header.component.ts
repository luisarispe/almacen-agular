import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [
    `
    .navbar-brand{
      cursor:pointer;
    },
    .log-out{
      cursor:pointer;
    }
    `
  ]
})
export class HeaderComponent implements OnInit {

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit(): void {
  }

  logOut() {
    this.usuarioService.logOut();
  }

}
