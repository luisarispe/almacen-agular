import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  menu: any[] = [
    {
      titulo: 'Producto',
      icono: 'markunread_mailbox',
      submenu: [
        {
          titulo: 'Producto',
          url: 'producto'
        },
        {
          titulo: 'Categoria',
          url: 'productoCategoria'
        }
      ]
    },
    {
      titulo: 'Usuarios',
      icono: 'account_circle',
      submenu: [
        {
          titulo: 'Gestión',
          url: 'usuario'
        },
      ]
    }
  ]
  constructor() { }
}
