import { Books } from './model/Books';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class BookService {
  bookStoreUrl: string = 'http://localhost:8082/bookstore/';
  /*deleteBook(id: any) {
    let book = this.getBookById(id);
    const index: number = this.books.indexOf(book);
    this.books.splice(index, 1);
  }*/
  getBookById(id: any | null): Observable<Books> {
    return this.http.get<Books>(this.bookStoreUrl+'get?id='+id);
  }

  addBook(name: any | null, price: any | null, author: any | null, desc: any | null): Observable<Object> {
    const body = {'name':name, 'author':author, 'price': price, 'shortDesc': desc}
    return this.http.post(this.bookStoreUrl+'add', body);
  }

  /*updateBook(name: any, price: any, author: any, desc: any, id: any) {
    for (let i = 0; i < this.books.length; i++) {
      if(this.books[i].id == id) {
        this.books[i].name = name;
        this.books[i].price = price;
        this.books[i].author = author;
        this.books[i].shortDesc = desc;
      }
    }
  }*/

  getAllBooks(): Observable<Books[]> {
    return this.http.get<Books[]>(this.bookStoreUrl+'all');
  }

  constructor(private http:HttpClient) {
    
  }
  
}

