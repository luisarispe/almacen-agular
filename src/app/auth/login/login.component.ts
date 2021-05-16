import { Component, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import pageSettings from '../../config/page-settings';
import { FormBuilder, Validators } from '@angular/forms';
import { UsuarioService } from '../../services/usuario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',

})
export class LoginComponent implements OnDestroy {
  pageSettings: any;

  public loginForm = this.fb.group({
    correo: ['', [Validators.required, Validators.email]],
    contrasena: ['', Validators.required]
  })

  get getControl() {
    return this.loginForm.controls;
  }

  constructor(private router: Router, private renderer: Renderer2, private fb: FormBuilder, private usuarioService: UsuarioService) {
    this.pageSettings = pageSettings;
    this.pageSettings.pageEmpty = true;
    this.renderer.addClass(document.body, 'bg-white');
  }

  ngOnDestroy() {
    this.pageSettings.pageEmpty = false;
    this.renderer.removeClass(document.body, 'bg-white');
  }

  login() {
    if (this.loginForm.invalid) {
      return
    }
    this.usuarioService.login(this.loginForm.value).subscribe(resp => {
      this.router.navigateByUrl('/');
    }, error => {
      Swal.fire({
        icon: 'warning',
        text: error.error.mensaje
      })
    });

  }


}
