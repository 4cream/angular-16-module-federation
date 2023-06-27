import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit{
  items: MenuItem[] | undefined;

  ngOnInit(): void {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-fw pi-power-off',
        routerLink: '/home',
      },
      {
        label: 'Flights',
        icon: 'pi pi-fw pi-power-off',
        routerLink: 'flights/flights-search',
      }
    ];
  }
}
