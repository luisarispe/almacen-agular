import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from '../../models/usuario.model';
import { FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styles: [
  ]
})
export class PerfilComponent implements OnInit {
  public usuario?: Usuario;
  public perfilForm = this.fb.group({
    nombre: ['', Validators.required],
    correo: ['', [Validators.required, Validators.email]]
  })
  constructor(private usuarioService: UsuarioService, private fb: FormBuilder) {
    this.usuario = usuarioService.usuario;
    this.perfilForm.setValue({ 'nombre': this.usuario!.nombre, 'correo': this.usuario!.correo })
  }
  get getControl() {
    return this.perfilForm.controls;
  }

  ngOnInit(): void {
    console.log(this.usuario);
  }
  actualizarUsuario() {
    if (this.perfilForm.invalid) return;
    this.usuarioService.actualizarUsuario(this.perfilForm.value).subscribe(resp => {
      Swal.fire('', 'Cambios fueron Actualizados.', 'success');
    }, (errors) => {
      Swal.fire('', errors.error.mensaje, 'info');
    })
  }

}
