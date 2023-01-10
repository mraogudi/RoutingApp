import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BookService } from '../book.service';
import { Books } from '../model/Books';

@Component({
  selector: 'app-manage-book',
  templateUrl: './manage-book.component.html',
  styleUrls: ['./manage-book.component.css']
})
export class ManageBookComponent {
  public books: Books[] = [];
  constructor(private bookService: BookService, private router: Router, private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.bookService.getAllBooks().subscribe((result: Books[]) => {
      this.books = result;
    });
  }

  deleteBook(id: any | null) {
    this.bookService.deleteBook(id);
    this.router.navigate(['/manage']);
  }

  updateBook(id: any | null) {
    this.router.navigate(['/update/'+id]);
  }

}
