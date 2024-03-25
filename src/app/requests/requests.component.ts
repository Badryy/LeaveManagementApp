import { Component,AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import * as  $ from "jquery"
import "datatables.net"

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html', 
  styleUrls: ['./requests.component.css']
})
export class RequestsComponent implements AfterViewInit{
  @ViewChild('dataTable', { static: false }) table: ElementRef | undefined;

  leaves: any[] = [
    { id: 1, name: 'Badru Awwal', type: 'Casual Leave', startDate: '2024-03-01', endDate: '2024-03-05', status: 'Approved' },
    { id: 2, name: 'Badru Awwal', type: 'Study Leave', startDate: '2024-03-10', endDate: '2024-03-15', status: 'Pending' },
    { id: 3, name: 'Badru Awwal', type: 'Casual Leave', startDate: '2024-03-01', endDate: '2024-03-05', status: 'Approved' },
    { id: 4, name: 'Badru Awwal', type: 'Study Leave', startDate: '2024-03-10', endDate: '2024-03-15', status: 'Pending' },
    { id: 5, name: 'Badru Awwal', type: 'Casual Leave', startDate: '2024-03-01', endDate: '2024-03-05', status: 'Approved' },
    { id: 6, name: 'Badru Awwal', type: 'Study Leave', startDate: '2024-03-10', endDate: '2024-03-15', status: 'Pending' },
    { id: 7, name: 'Badru Awwal', type: 'Casual Leave', startDate: '2024-03-01', endDate: '2024-03-05', status: 'Approved' },
    { id: 8, name: 'Badru Awwal', type: 'Study Leave', startDate: '2024-03-10', endDate: '2024-03-15', status: 'Pending' },
    { id: 9, name: 'Badru Awwal', type: 'Casual Leave', startDate: '2024-03-01', endDate: '2024-03-05', status: 'Approved' },
    { id: 10, name: 'Badru Awwal', type: 'Study Leave', startDate: '2024-03-10', endDate: '2024-03-15', status: 'Pending' },
    { id: 11, name: 'Badru Awwal', type: 'Casual Leave', startDate: '2024-03-01', endDate: '2024-03-05', status: 'Approved' },
    { id: 12, name: 'Badru Awwal', type: 'Study Leave', startDate: '2024-03-10', endDate: '2024-03-15', status: 'Pending' },
    { id: 13, name: 'Badru Awwal', type: 'Casual Leave', startDate: '2024-03-01', endDate: '2024-03-05', status: 'Approved' },
    { id: 14, name: 'Badru Awwal', type: 'Study Leave', startDate: '2024-03-10', endDate: '2024-03-15', status: 'Pending' },
    { id: 15, name: 'Badru Awwal', type: 'Casual Leave', startDate: '2024-03-01', endDate: '2024-03-05', status: 'Approved' },
    { id: 16, name: 'Badru Awwal', type: 'Study Leave', startDate: '2024-03-10', endDate: '2024-03-15', status: 'Pending' },
    { id: 17, name: 'Badru Awwal', type: 'Casual Leave', startDate: '2024-03-01', endDate: '2024-03-05', status: 'Approved' },
    { id: 18, name: 'Badru Awwal', type: 'Study Leave', startDate: '2024-03-10', endDate: '2025-03-15', status: 'Pending' }
    // Add more dummy leave data here
  ];

  constructor() { }

  ngAfterViewInit() {
    if (this.table) {
      $(this.table.nativeElement).DataTable().destroy();
      $(this.table.nativeElement).DataTable({
        searching: true,
        // dom: "ftp",
        pagingType: "numbers",
        paging: true,

        pageLength: 10,
        lengthMenu: [10, 25, 50, 100],
        data: this.leaves,
        columns: [
          { data: "id" },
          { data: "name" },
          { data: "type" },
          { data: "startDate" },
          { data: "endDate" },
          { data: "status" },
        ]

      });
    }
  }
}
 