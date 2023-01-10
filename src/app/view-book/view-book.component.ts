import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../book.service';
import { Books } from '../model/Books';

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
    this.bookService.getBookById(id).subscribe((data : Books ) => {
      this.book = data;
    });
  }
}
