import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modals',
  templateUrl: './modals.component.html',
  styleUrls: ['./modals.component.scss'],
})
export class ModalsComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}
  // тут приймаються дані щодо типу модалки
  @Input() isOpen: boolean = false;
  @Input() modalType: string = '';
  @Output() closeModalEvent = new EventEmitter<void>();

  closeModal() {
    this.closeModalEvent.emit();
  }
}
