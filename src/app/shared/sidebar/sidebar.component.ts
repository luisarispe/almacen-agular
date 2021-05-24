import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { SidebarService } from '../../services/sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
  ]
})
export class SidebarComponent implements OnInit {

  menus: any[] = [];
  constructor(private sidebarService: SidebarService, public usuarioService: UsuarioService) {
    this.menus = sidebarService.menu;
  }

  ngOnInit(): void {

  }

}
