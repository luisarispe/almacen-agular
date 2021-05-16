import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from 'src/environments/environment';
import { RegisterForm } from '../interfaces/register-form.interface';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { loginForm } from '../interfaces/login-form.interface';
import { Router } from '@angular/router';

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient, private router: Router) { }

  register(formulario: RegisterForm) {

    return this.http.post(`${base_url}/usuario/agregar`, formulario);

  }
  login(formulario: loginForm) {
    return this.http.post(`${base_url}/usuario/login`, formulario).pipe(
      tap((resp: any) => {
        localStorage.setItem('token', resp.token);
      })
    );
  }
  reNewToken(): Observable<boolean> {
    const token = localStorage.getItem('token') || '';

    return this.http.get(`${base_url}/usuario/renewToken`,
      {
        headers:
          { 'x-token': token }
      }).pipe(
        tap((resp: any) => {
          localStorage.setItem('token', resp.token)
        }),
        map((resp) => {
          return true;
        }),
        catchError((error) => {
          return of(false);
        })
      )
  }
  logOut() {
    localStorage.removeItem('token');
    this.router.navigateByUrl('/login');
  }

}
