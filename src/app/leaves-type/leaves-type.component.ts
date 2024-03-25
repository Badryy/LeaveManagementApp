import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-leaves-type',
  templateUrl: './leaves-type.component.html',
  styleUrls: ['./leaves-type.component.css']
})
export class LeavesTypeComponent implements AfterViewInit {
  @ViewChild('dataTable', { static: false }) table: ElementRef | undefined;

  leaves: any[] = [
    { id: 1, type: 'Annual Leave', duration: 20 },
    { id: 2, type: 'Maternity Leave', duration: 90 },
    { id: 3, type: 'Sick Leave', duration: 'Condition Determines' },
    { id: 4, type: 'Compassionate Leave', duration: 'Condition Determines' },
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
        // data: this.leaves,
        // columns: [
        //   { data: "id" },
        //   { data: "staffId" },
        //   { data: "name" },
        //   { data: "email" },
        //   { data: "dept" },
        //   { data: "dob" },
        //   { data: "gender" },
        //   {}
        // ]

      });
    }
  }
}
