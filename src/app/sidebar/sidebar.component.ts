import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  currentRoute: string;
  showSidebar: boolean = false;

  constructor(private router: Router) {
    this.currentRoute = this.router.url;
  }

  toggleSidebar() {
    this.showSidebar = !this.showSidebar;
  }
}
