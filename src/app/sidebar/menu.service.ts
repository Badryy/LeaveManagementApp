import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor() { }

  getMenuItems(role: string): Observable<any[]> {
    // Define menu items for different roles
    let menuItems: any[] = [];

    if (role === 'admin') {
      menuItems = [
        { label: 'Overview', link: '/admin' },
        { label: 'Requests', link: '/requests' },
        // { label: 'Manage Staffs', link: '/staffs' },
        { label: 'Settings', link: '/settings' }
      ];
    } else if (role === 'employee') {
      menuItems = [
        { label: 'Dashboard', link: '/dashboard' },
        { label: 'Request', link: '/leave-request' },
        { label: 'History', link: '/leaves' }
      ];
    } else {
      // Default menu items for unknown roles
      menuItems = [];
    }

    // Return menu items as an observable
    return of(menuItems);
  }
}
