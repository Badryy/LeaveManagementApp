import { Component, HostListener } from '@angular/core';
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

  // @HostListener('document:click', ['$event'])
  // onClick(event: MouseEvent) {
  //   if (this.showSidebar && !(event.target as HTMLElement).closest('.sidebar-container')) {
  //     this.showSidebar = false;
  //   }
  // }
}
