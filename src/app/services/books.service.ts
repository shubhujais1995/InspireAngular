import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Book, BookResponse } from '../modal/books';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  url = 'https://s3.amazonaws.com/api-fun/books.json';

  constructor(private http: HttpClient) { }

  //To get book from api using http
  getBooks(): Observable<any> {
    return this.http.get<Observable<BookResponse>>(this.url);
  }
}
