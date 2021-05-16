import { Component, OnDestroy, Renderer2 } from '@angular/core';
import { FormBuilder, Validators, AbstractControlOptions, ValidationErrors, AbstractControl, ValidatorFn } from '@angular/forms';
import pageSettings from '../../config/page-settings';
import { UsuarioService } from '../../services/usuario.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [
  ]
})
export class RegisterComponent implements OnDestroy {

  pageSettings: any;

  public registerForm = this.fb.group({
    nombre: ['', Validators.required],
    correo: ['', [Validators.required, Validators.email]],
    contrasena: ['', Validators.required],
    contrasena2: ['', Validators.required]
  }, {
    validators: this.contrasenasIguales()
  } as AbstractControlOptions)

  constructor(private renderer: Renderer2, private fb: FormBuilder, private usuarioService: UsuarioService, private router: Router) {
    this.pageSettings = pageSettings;
    this.pageSettings.pageEmpty = true;
    this.renderer.addClass(document.body, 'bg-white');
  }

  ngOnDestroy() {
    this.pageSettings.pageEmpty = false;
    this.renderer.removeClass(document.body, 'bg-white');
  }

  crearUsuario() {

    if (this.registerForm.invalid) {
      return
    }
    this.usuarioService.register(this.registerForm.value).subscribe(resp => {
      Swal.fire({
        icon: 'success',
        text: 'Usuario Creado.',
      });
      this.router.navigateByUrl('/login');

    }, (error => {
      Swal.fire({
        icon: 'info',
        text: error.error.mensaje,
      })
    }))
  }

  get getControls() {
    return this.registerForm.controls;
  }


  contrasenasIguales(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const contrasena1 = control.get('contrasena');
      const contrasena2 = control.get('contrasena2');

      return contrasena1?.value === contrasena2?.value ? null : { noEsIgual: true };
    };
  }
}


