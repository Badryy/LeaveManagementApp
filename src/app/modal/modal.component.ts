import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  @Input() visible: boolean = false;
  @Input() title: string = 'Modal Title';
  @Output() confirmed = new EventEmitter<any>();
  @Output() canceled = new EventEmitter<void>();

  closeModal() {
    this.visible = false;
  }

  confirm() {
    this.confirmed.emit();
    this.closeModal();
  }

  cancel() {
    this.canceled.emit();
    this.closeModal();
  }
}