import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class BookService {
  deleteBook(id: any) {
    let book = this.getBookById(id);
    const index: number = this.books.indexOf(book);
    this.books.splice(index, 1);
  }
  private book!: Books;
  getBookById(id: any | null): Books {
    for (let i = 0; i < this.books.length; i++) {
      if(this.books[i].id == id)
        this.book = this.books[i];
    }
    return this.book;
  }

  addBook(name: any | null, price: any | null, author: any | null, desc: any | null) {
    let id = this.books.length + 1;
    this.books.push({id: id, name: name, price: price, author: author, shortDesc: desc});
  }

  updateBook(name: any, price: any, author: any, desc: any, id: any) {
    for (let i = 0; i < this.books.length; i++) {
      if(this.books[i].id == id) {
        this.books[i].name = name;
        this.books[i].price = price;
        this.books[i].author = author;
        this.books[i].shortDesc = desc;
      }
    }
  }

  getAllBooks(): Books[] {
    return this.books;
  }
  books: any;
  jsonString = [
    {
        "id":1,
        "name":"Java 8",
        "price": 125.00,
        "author": "James",
        "shortDesc":"Complete reference of Java 8"
    },
    {
        "id":2,
        "name":"Angular 8",
        "price": 200.00,
        "author": "GMRao",
        "shortDesc":"Complete reference of Angular 8"
    },
    {
        "id":3,
        "name":"Python",
        "price": 300.50,
        "author": "Vedanshika",
        "shortDesc":"Complete reference of Python"
    },
    {
        "id":4,
        "name":"JS",
        "price": 450.00,
        "author": "Bhavya",
        "shortDesc":"Complete reference of Java Script"
    },
    {
        "id":5,
        "name":"CSS 3",
        "price": 150.90,
        "author": "Sree",
        "shortDesc":"Complete reference of CSS 3"
    },
    {
        "id":6,
        "name":"Computer Network",
        "price": 999.00,
        "author": "Vasundhara",
        "shortDesc":"Complete reference of Computer Network"
    },
    {
        "id":7,
        "name":"Data Structure",
        "price": 450.80,
        "author": "Prasanth",
        "shortDesc":"Complete reference of Data Structure"
    },
    {
        "id":8,
        "name":"UML",
        "price": 444.30,
        "author": "Bandi",
        "shortDesc":"Complete reference of Unified Modal Language"
    }
];

  constructor() {
    let jsStr = JSON.stringify(this.jsonString);
    this.books = JSON.parse(jsStr);
  }
  
}

export interface Books {
  id: number,
  name: string,
  price: number,
  author: string,
  shortDesc:string
}
