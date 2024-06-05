import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { IonInput } from '@ionic/angular';
import { Post } from 'src/app/post/post.page';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss'],
})
export class PostFormComponent implements OnInit {
  //передаем ViewChild название titleInput которое присваиваем через #titleInput елементу html
  @ViewChild('titleInput') titleInput!: IonInput;

  //функция фокуса input на кнопку
  focusTitle() {
    // console.log(this.inputRef!)
    if (this.titleInput) {
      this.titleInput.setFocus();
    }
  }

  // створюєм onAdd і присвоюєм формат. EventEmitter используется для установления связи между дочерним и родительским компонентами, а также для взаимодействия компонентов в целом.
  @Output() onAdd: EventEmitter<Post> = new EventEmitter<Post>();

  //функция для создания поста в консоли если поля ввода не пустие trim()
  addPost() {
    if (this.text.trim() && this.title.trim() &&  this.id > 0) {
      const post: Post = {
        title: this.title,
        text: this.text,
        id: this.id,
      };
      //emit(post) в середину emit передаєм те шо хочем емітити для відправки даних на поверхню, для цого метода потрібно якраз EventEmitter
      this.onAdd.emit(post);
      console.log('New Post', post);
      this.title = this.text = '';
      this.id < 0;
    }
  }

  title = '';
  text = '';
  id = 0;

  constructor() {}

  ngOnInit() {}
}
