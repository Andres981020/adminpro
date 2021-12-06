import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: any[] = [
    {
      titulo: 'Dashboard',
      icono: 'has-arrow waves-effect waves-dark',
      submenu: [
        {titulo: 'Main', url: '/dashboard'},
        {titulo: 'ProgressBar', url: 'progress'},
        {titulo: 'Graficas', url: 'grafical'},
      ]
    }
  ];


  constructor() { }
}
