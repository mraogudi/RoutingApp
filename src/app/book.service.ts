import { Books } from './model/Books';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class BookService {
  bookStoreUrl: string = 'http://localhost:8082/bookstore/';
  addUrl: string = this.bookStoreUrl+'add';
  updateUrl: string = this.bookStoreUrl+'update'
  deleteUrl: string = this.bookStoreUrl+'delete/'
  getUrl: string = this.bookStoreUrl+'get'
  getAllUrl: string = this.bookStoreUrl+'all'
  deleteBook(id: any | null): Observable<Object> {
    return this.http.delete(this.deleteUrl+id);
  }
  getBookById(id: any | null): Observable<Books> {
    return this.http.get<Books>(this.getUrl+'?id='+id);
  }

  addBook(name: any | null, price: any | null, author: any | null, desc: any | null): Observable<Object> {
    const body = {'name':name, 'author':author, 'price':price, 'shortDesc':desc}
    return this.http.post(this.addUrl, body);
  }

  updateBook(name: any, price: any, author: any, desc: any, id: any): Observable<Object> {
    const body = {'id':id, 'name':name, 'author':author, 'price': price, 'shortDesc': desc}
    return this.http.post(this.addUrl, body);
  }

  getAllBooks(): Observable<Books[]> {
    return this.http.get<Books[]>(this.getAllUrl);
  }

  constructor(private http:HttpClient) { }
  
}
