import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
// використовуєм цей сервіс шоб підключити різні типи запросів 
import { BooksService } from './books.service';

@Component({
  selector: 'app-rest-api',
  templateUrl: './rest-api.component.html',
  styleUrls: ['./rest-api.component.scss'],
})
export class RestApiComponent  implements OnInit {
// для додавання книжки
  bookData: any = {
    title: '',
    author: '',
    pages: null,
    rating: null
    
  };
// для видалення книжки по id
  bookId: string = '';
// для виводу всіх книжок з бази даних
  books: any[] = [];

  constructor(private booksService: BooksService) {}

  getAllBooks() {
    this.booksService.getAllBooks().subscribe(
      (result) => {
        this.books = result;
        console.log('All books:', this.books);
      },
      (error) => {
        console.error('Error fetching books:', error);
      }
    );
  }

  addBook() {
    this.booksService.addBook(this.bookData).subscribe(
      (result) => {
        console.log('Book added successfully:', result);
      },
      (error) => {
        console.error('Error adding book:', error);
      }
    );
  }
  deleteBook() {
    if (this.bookId) {
      this.booksService.deleteBook(this.bookId).subscribe(
        (result) => {
          console.log('Book deleted successfully:', result);
          // Додайте логіку для оновлення інтерфейсу користувача або іншої дії
        },
        (error) => {
          console.error('Error deleting book:', error);
          // Додайте логіку для обробки помилки
        }
      );
    }
  }

  ngOnInit(): void{}

}