import { Router } from '@angular/router';
import { OnInit } from '@angular/core';
import { BookService } from './../book.service';
import { Component } from '@angular/core';
import { Books } from '../model/Books';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public books: Books[] = [];
  searchTerm = '';
  term = '';
  constructor(private bookService: BookService, private route:Router) {}
  ngOnInit(): void {
    this.bookService.getAllBooks().subscribe((result: Books[]) => {
      this.books = result;
    });
  }

  viewPage(id: any | null) {
    this.route.navigate(['/view/'+id]);
  }

}
