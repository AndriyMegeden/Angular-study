import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modals-page',
  templateUrl: './modals-page.page.html',
  styleUrls: ['./modals-page.page.scss'],
})
export class ModalsPagePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  isModalOpen: boolean = false;
  modalType: string = '';
// для відкриття модалки
// і отримання з івенту даних типа модалки 
  openModal(type: string) {
    this.modalType = type;
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }
}
