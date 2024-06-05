import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button-modal',
  templateUrl: './button-modal.component.html',
  styleUrls: ['./button-modal.component.scss'],
})
export class ButtonModalComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}
  // створюєм івент відправляємо його і передаємо в нього тип модалки
  @Output() openModalEvent = new EventEmitter<string>();

  openModal(type: string) {
    this.openModalEvent.emit(type);
  }
}
