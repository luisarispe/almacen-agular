import { Usuario } from '../models/usuario.model';
export interface CargaUsuario {
    total: number,
    usuarios: Usuario[]
}