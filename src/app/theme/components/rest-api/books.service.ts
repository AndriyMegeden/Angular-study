// books.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  // потрібно шоб сервіс сам себе задекларував
  providedIn: 'root',
})
export class BooksService {
  private apiUrl = 'http://localhost:2000'; // Замініть це на реальний URL вашого сервера

  constructor(private http: HttpClient) {}

  getAllBooks(): Observable<any> {
    const url = `${this.apiUrl}/books`;
    return this.http.get(url);
  }

  addBook(book: any): Observable<any> {
    const url = `${this.apiUrl}/books`;
    return this.http.post(url, book);
  }

  deleteBook(id: string): Observable<any> {
    const url = `${this.apiUrl}/books/${id}`;
    return this.http.delete(url);
  }
}
