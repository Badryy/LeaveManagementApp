import { Component } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent {
  selectedTab: string = 'staffs';

  constructor() { }

  selectTab(tab: string): void {
    this.selectedTab = tab;
  }

}
