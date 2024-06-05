import { Component, OnInit } from '@angular/core';
import { questions } from '../interfaces/main.settings';
import { QuestionsConfig, } from '../interfaces/main.interface';

@Component({
  selector: 'app-text-page',
  templateUrl: './text-page.page.html',
  styleUrls: ['./text-page.page.scss'],
})
export class TextPagePage implements OnInit {

  public questions: QuestionsConfig = questions;



  constructor() { }

  ngOnInit() {
  }

}
