// Пайп нужно декларировать 

import { Pipe, PipeTransform } from '@angular/core';
import { Post } from './pipes-numbers/pipes-numbers.page';

@Pipe({
  name: 'filter',
// pure: false це потрібно якщо добавляти новий пост то щоб він добавлявся і зразу показувався коли інпут ше активний
})
export class FilterPipe implements PipeTransform {
    // field змінна для перемикання пошуків
  transform(posts: Post[], search: string = '', field: string = 'title'): Post[] {
    // якшо в інпуті пусто то вертаються всі пости
    if (!search.trim()) {
      return posts;
    }
    // якщо заголовок або текст включає в собі букви з інпута то вертається той пост який прописали
    return posts.filter( post =>{
        return post[field].toLowerCase().includes(search.toLowerCase())
    })
  }
}
