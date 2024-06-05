import {
  Component,
  ContentChild,
  ElementRef,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  ViewEncapsulation
} from '@angular/core';
import { IonInput } from '@ionic/angular';
import { Post } from 'src/app/post/post.page';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss'],
  //encapsulation: ViewEncapsulation.None потрібно щоб зробити стилі
  // глобальними для різних компонентів
  encapsulation: ViewEncapsulation.None
})
export class PostCardComponent implements OnInit, OnDestroy {
  @Input() post!: Post;
  //  @ContentChild дає доступ до внутрішнього елементу,
  // info це назва по якій знаходять внутрішній елемент
  // PostCardComponent компонент в середині якого знаходиться наш елемент
  // до якого ми отримали доступ
  @ContentChild('info', { static: true }) info!: ElementRef;
  // оутпутим шоб видалити пост по натисканню на кнопку по id
  @Output() onRemove = new EventEmitter<number>();

  constructor() {} 

  ngOnInit() {
    console.log(this.info);
    this.info.nativeElement.style.color = 'yellow'
  }
//метод потрібен для виделення по id
  removePost(){
    this.onRemove.emit(this.post.id)
  }

  //метод викликається після виделення чогось
  ngOnDestroy(): void {
    console.log('ngOnDestroy')
  }
}
