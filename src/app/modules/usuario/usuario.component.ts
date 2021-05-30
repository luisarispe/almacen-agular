import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from '../../models/usuario.model';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  public usuarios: Usuario[] = [];
  public total: number = 0;
  public acumulado: number = 0;
  constructor(private usuarioService: UsuarioService) { }

  ngOnInit(): void {
    this.listaUsuarios();
  }

  listaUsuarios() {
    this.usuarioService.listarUsuarios(this.acumulado).subscribe(resp => {
      this.usuarios = resp.usuarios;
      this.total = resp.total;
    }, error => {
      this.usuarios = [];
    })
  }
  cambiarPagina(pagina: number = 0) {
    this.acumulado += pagina;
    if (this.total < this.acumulado) {
      this.acumulado -= pagina;
    } else if (this.acumulado < 0) {
      this.acumulado = 0;
    }

    console.log(this.acumulado);
    this.listaUsuarios();
  }
}
