import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  currentRoute: string ='';
  showSidebar: boolean = false;

  constructor(private router: Router) { }

  ngOnInit() {
    this.currentRoute = this.router.url; 
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = event.url;
      }
    });
  }

  toggleSidebar() {
    this.showSidebar = !this.showSidebar;
  }
}
