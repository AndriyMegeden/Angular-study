import { Component, OnInit } from '@angular/core';

export interface Post {
  title: string;
  text: string;
  id?: number;
}

@Component({
  selector: 'app-post',
  templateUrl: './post.page.html',
  styleUrls: ['./post.page.scss'],
  
})
export class PostPage implements OnInit {
  posts: Post[] = [
    {
      title:
        'Напис знаходиться в post-card.component',
      text: 'Lorem ipsum dolor sit amet.',
      id: 1,
    },
    {
      title:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt, impedit! elit. Sunt, impedit! elit. Sunt, impedit! elit. Sunt, impedit!',
      text: ' ipsum dolor sit amet.',
      id: 2,
    },
  ];

  constructor() {}

  ngOnInit() {}
  // this.posts.unshift(post) добавляємо в масив новий пост
  updatePosts(post: Post) {
    this.posts.unshift(post);
  }

  removePost(id: number) {
    console.log(id);
    this.posts = this.posts.filter((post) => post.id !== id);
  }
}
