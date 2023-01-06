import { OnInit } from '@angular/core';
import { Books, BookService } from './../book.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public books: Books[] = [];
  constructor(private bookService: BookService) {}
  ngOnInit(): void {
    this.books = this.bookService.getAllBooks();
  }

}
