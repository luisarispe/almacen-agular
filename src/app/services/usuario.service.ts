import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from 'src/environments/environment';
import { RegisterForm } from '../interfaces/register-form.interface';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { loginForm } from '../interfaces/login-form.interface';
import { Router } from '@angular/router';
import { Usuario } from '../models/usuario.model';
import { CargaUsuario } from '../interfaces/cargar-Usuarios.interface';

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  public usuario?: Usuario;

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

  get token(): string {
    const token = localStorage.getItem('token') || '';
    return token
  }

  get id(): number {
    return this.usuario?.id || 0;
  }
  get headers() {
    return {
      headers: {
        'x-token': this.token
      }
    }
  }

  reNewToken(): Observable<boolean> {
    const token = localStorage.getItem('token') || '';

    return this.http.get(`${base_url}/usuario/renewToken`,
      {
        headers:
          { 'x-token': token }
      }).pipe(
        tap((resp: any) => {
          const { id, nombre, correo, createdAt, updatedAt, estado } = resp.usuario;
          this.usuario = new Usuario(id, nombre, correo, createdAt, updatedAt, estado)
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
  actualizarUsuario(data: { nombre: string, correo: string }) {
    data = {
      ...data
    }
    return this.http.put(`${base_url}/usuario/actualizar/${this.id}`, data, this.headers).pipe(
      tap((resp: any) => {
        const { nombre, correo, createdAt, updatedAt } = resp.UsuarioAct;
        this.usuario!.updatedAt = updatedAt;
        this.usuario!.createdAt = createdAt;
        this.usuario!.correo = correo;
        this.usuario!.nombre = nombre;
        console.log(this.usuario);
      })
    );
  }
  listarUsuarios(desde: number = 0) {
    return this.http.get<CargaUsuario>(`${base_url}/usuario/listar?desde=${desde}`, this.headers).pipe(
      map((resp) => {
        const usuarios = resp.usuarios.map(usuario => new Usuario(usuario.id, usuario.nombre, usuario.correo, usuario.createdAt, usuario.updatedAt, usuario.estado))
        return {
          total: resp.total,
          usuarios
        }

      })
    );
  }

}
