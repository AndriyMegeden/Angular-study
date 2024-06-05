import { Component, Input, OnInit } from '@angular/core';
import { QuestionsConfig, } from 'src/app/interfaces/main.interface';

@Component({
  selector: 'app-text-open',
  templateUrl: './text-open.component.html',
  styleUrls: ['./text-open.component.scss'],
})
export class TextOpenComponent  implements OnInit {

  @Input() config!: QuestionsConfig;

  constructor() { }

  ngOnInit() {}

}
