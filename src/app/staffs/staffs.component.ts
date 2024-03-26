import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-staffs',
  templateUrl: './staffs.component.html',
  styleUrls: ['./staffs.component.css']
})
export class StaffsComponent implements AfterViewInit {
  @ViewChild('dataTable', { static: false }) table: ElementRef | undefined;
  showModal: boolean = false;
  modalTitle: string = 'Staff Information';

  openModal() {
    this.showModal = true;
  }

  onConfirm() {
    this.showModal = false;
    console.log('Modal confirmed');
  }

  onCancel() {
    this.showModal = false;
    console.log('Modal canceled');
  }


  leaves: any[] = [
    { id: 1, staffId: 'IETECH/01/21', name: 'Badru Awwal', email: 'awwal.badru@ietech.com', dept: 'Development', dob: '2024-03-01', gender: 'Male' },
    { id: 2, staffId: 'IETECH/01/21', name: 'Badru Awwal', email: 'awwal.badru@ietech.com', dept: 'Development', dob: '2024-03-01', gender: 'Male' },
    { id: 3, staffId: 'IETECH/01/21', name: 'Badru Awwal', email: 'awwal.badru@ietech.com', dept: 'Development', dob: '2024-03-01', gender: 'Male' },
    { id: 4, staffId: 'IETECH/01/21', name: 'Badru Awwal', email: 'awwal.badru@ietech.com', dept: 'Development', dob: '2024-03-01', gender: 'Male' },
    { id: 5, staffId: 'IETECH/01/21', name: 'Badru Awwal', email: 'awwal.badru@ietech.com', dept: 'Development', dob: '2024-03-01', gender: 'Male' },
    { id: 6, staffId: 'IETECH/01/21', name: 'Badru Awwal', email: 'awwal.badru@ietech.com', dept: 'Development', dob: '2024-03-01', gender: 'Male' },
    { id: 7, staffId: 'IETECH/01/21', name: 'Badru Awwal', email: 'awwal.badru@ietech.com', dept: 'Development', dob: '2024-03-01', gender: 'Male' },
    { id: 8, staffId: 'IETECH/01/21', name: 'Badru Awwal', email: 'awwal.badru@ietech.com', dept: 'Development', dob: '2024-03-01', gender: 'Male' },
    { id: 9, staffId: 'IETECH/01/21', name: 'Badru Awwal', email: 'awwal.badru@ietech.com', dept: 'Development', dob: '2024-03-01', gender: 'Male' },
    { id: 10, staffId: 'IETECH/01/21', name: 'Badru Awwal', email: 'awwal.badru@ietech.com', dept: 'Development', dob: '2024-03-01', gender: 'Male' },
    { id: 11, staffId: 'IETECH/01/21', name: 'Badru Awwal', email: 'awwal.badru@ietech.com', dept: 'Development', dob: '2024-03-01', gender: 'Male' },
    { id: 12, staffId: 'IETECH/01/21', name: 'Badru Awwal', email: 'awwal.badru@ietech.com', dept: 'Development', dob: '2024-03-01', gender: 'Male' },
    { id: 13, staffId: 'IETECH/01/21', name: 'Badru Awwal', email: 'awwal.badru@ietech.com', dept: 'Development', dob: '2024-03-01', gender: 'Male' },
    { id: 14, staffId: 'IETECH/01/21', name: 'Badru Awwal', email: 'awwal.badru@ietech.com', dept: 'Development', dob: '2024-03-01', gender: 'Male' },
    { id: 15, staffId: 'IETECH/01/21', name: 'Badru Awwal', email: 'awwal.badru@ietech.com', dept: 'Development', dob: '2024-03-01', gender: 'Male' },
    { id: 16, staffId: 'IETECH/01/21', name: 'Badru Awwal', email: 'awwal.badru@ietech.com', dept: 'Development', dob: '2024-03-01', gender: 'Male' },
    { id: 17, staffId: 'IETECH/01/21', name: 'Badru Awwal', email: 'awwal.badru@ietech.com', dept: 'Development', dob: '2024-03-01', gender: 'Male' },
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
