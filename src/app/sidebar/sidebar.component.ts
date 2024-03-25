import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { MenuService } from './menu.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  currentRoute: string = '';
  showSidebar: boolean = false;
  menuItems: any[] = [];

  constructor(private router: Router, private menuService: MenuService) { }

  ngOnInit() {
    this.currentRoute = this.router.url;
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = event.url;
      }
    });

    const userRole = 'employee';
    this.menuService.getMenuItems(userRole).subscribe(menuItems => {
      this.menuItems = menuItems;
    });
  }

  toggleSidebar() {
    this.showSidebar = !this.showSidebar;
  }
}
