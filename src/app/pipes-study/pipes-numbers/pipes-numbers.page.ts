import { Component, OnInit } from '@angular/core';

// фільтрація списків
export interface Post {
  title: string
  text: string
  // потрібно для field, перемикання пошуку
  [key: string]: string;
}

@Component({
  selector: 'app-pipes-numbers',
  templateUrl: './pipes-numbers.page.html',
  styleUrls: ['./pipes-numbers.page.scss'],
})
export class PipesNumbersPage implements OnInit {

// параметр по якому буде додаватись  пошук
  search = ''
  // параметр по якому буде додаватись перемикання пошуку
  searchField = 'title'

  posts: Post[] = [
    {
      title: 'Beer', 
      text: 'the best beer in the world'
    },
    {
      title: 'Coffee',
      text: 'start your day with a cup of coffee'
    },
    {
      title: 'Books',
      text: 'reading is a journey to another world'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
