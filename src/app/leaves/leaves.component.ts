import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import * as  $ from "jquery"
import "datatables.net"


@Component({
  selector: 'app-leaves',
  templateUrl: './leaves.component.html',
  styleUrls: ['./leaves.component.css']
})
export class LeavesComponent implements AfterViewInit {
  @ViewChild('dataTable', { static: false }) table: ElementRef | undefined;

  leaves: any[] = [
    { id: 1, type: 'Casual Leave', startDate: '2024-03-01', endDate: '2024-03-05', status: 'Approved' },
    { id: 2, type: 'Study Leave', startDate: '2024-03-10', endDate: '2024-03-15', status: 'Pending' },
    { id: 1, type: 'Casual Leave', startDate: '2024-03-01', endDate: '2024-03-05', status: 'Approved' },
    { id: 2, type: 'Study Leave', startDate: '2024-03-10', endDate: '2024-03-15', status: 'Pending' },
    { id: 1, type: 'Casual Leave', startDate: '2024-03-01', endDate: '2024-03-05', status: 'Approved' },
    { id: 2, type: 'Study Leave', startDate: '2024-03-10', endDate: '2024-03-15', status: 'Pending' },
    { id: 1, type: 'Casual Leave', startDate: '2024-03-01', endDate: '2024-03-05', status: 'Approved' },
    { id: 2, type: 'Study Leave', startDate: '2024-03-10', endDate: '2024-03-15', status: 'Pending' },
    { id: 1, type: 'Casual Leave', startDate: '2024-03-01', endDate: '2024-03-05', status: 'Approved' },
    { id: 2, type: 'Study Leave', startDate: '2024-03-10', endDate: '2024-03-15', status: 'Pending' },
    { id: 1, type: 'Casual Leave', startDate: '2024-03-01', endDate: '2024-03-05', status: 'Approved' },
    { id: 2, type: 'Study Leave', startDate: '2024-03-10', endDate: '2024-03-15', status: 'Pending' },
    { id: 1, type: 'Casual Leave', startDate: '2024-03-01', endDate: '2024-03-05', status: 'Approved' },
    { id: 2, type: 'Study Leave', startDate: '2024-03-10', endDate: '2024-03-15', status: 'Pending' },
    { id: 1, type: 'Casual Leave', startDate: '2024-03-01', endDate: '2024-03-05', status: 'Approved' },
    { id: 2, type: 'Study Leave', startDate: '2024-03-10', endDate: '2024-03-15', status: 'Pending' },
    { id: 1, type: 'Casual Leave', startDate: '2024-03-01', endDate: '2024-03-05', status: 'Approved' },
    { id: 2, type: 'Study Leave', startDate: '2024-03-10', endDate: '2024-03-15', status: 'Pending' },
    { id: 1, type: 'Casual Leave', startDate: '2024-03-01', endDate: '2024-03-05', status: 'Approved' },
    { id: 2, type: 'Study Leave', startDate: '2024-03-10', endDate: '2024-03-15', status: 'Pending' },
    { id: 1, type: 'Casual Leave', startDate: '2024-03-01', endDate: '2024-03-05', status: 'Approved' },
    { id: 2, type: 'Study Leave', startDate: '2024-03-10', endDate: '2024-03-15', status: 'Pending' },
    { id: 1, type: 'Casual Leave', startDate: '2024-03-01', endDate: '2024-03-05', status: 'Approved' },
    { id: 2, type: 'Study Leave', startDate: '2024-03-10', endDate: '2024-03-15', status: 'Pending' },
    { id: 1, type: 'Casual Leave', startDate: '2024-03-01', endDate: '2024-03-05', status: 'Approved' },
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
          { data: "type" },
          { data: "startDate" },
          { data: "endDate" },
          { data: "status" }
        ]

      });
    }
  }
}
