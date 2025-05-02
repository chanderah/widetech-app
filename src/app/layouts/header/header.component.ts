import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Menu } from '../../interfaces/menu';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { CommonService } from '../../services/common.service';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-header',
  imports: [CommonModule, MatSidenavModule, MatButtonModule, MatIconModule, MatDividerModule, RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  animations: [
    trigger('slideInOut', [
      state('in', style({ transform: 'translateX(0%)' })),
      state('out', style({ transform: 'translateX(-100%)' })),
      transition('in <=> out', animate('150ms ease-in-out')),
    ]),
  ],
})
export class HeaderComponent {
  showMenuDrawer: boolean = false;
  menus: Menu[] = [
    { name: 'Home', url: '/' },
    { name: 'About', url: '/about' },
    { name: 'Todo', url: '/todo' },
    { name: 'Form', url: '/form' },
  ];

  constructor(public commonService: CommonService) {}

  openMenuDrawer() {
    this.showMenuDrawer = true;
  }

  closeMenuDrawer() {
    this.showMenuDrawer = false;
  }
}
