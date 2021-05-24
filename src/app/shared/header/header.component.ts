import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';
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
  public usuario?: Usuario
  constructor(public usuarioService: UsuarioService) {
    this.usuario = usuarioService.usuario;
  }

  ngOnInit(): void {
  }

  logOut() {
    this.usuarioService.logOut();
  }

}
