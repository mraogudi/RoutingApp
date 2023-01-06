import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Books, BookService } from '../book.service';

@Component({
  selector: 'app-view-book',
  templateUrl: './view-book.component.html',
  styleUrls: ['./view-book.component.css']
})
export class ViewBookComponent implements OnInit {
  public book!: Books;
  constructor(private bookService: BookService, private route: ActivatedRoute) {}
  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    this.book = this.bookService.getBookById(id);
  }
}
