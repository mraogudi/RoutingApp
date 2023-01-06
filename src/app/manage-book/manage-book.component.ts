import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { Books, BookService } from '../book.service';

@Component({
  selector: 'app-manage-book',
  templateUrl: './manage-book.component.html',
  styleUrls: ['./manage-book.component.css']
})
export class ManageBookComponent {
  public books: Books[] = [];
  constructor(private bookService: BookService, private router: Router, private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.books = this.bookService.getAllBooks();
  }

  deleteBook(id: any | null) {
    let bookValue;
    for (let i = 0; i < this.books.length; i++) {
      if(this.books[i].id == id)
        bookValue = this.books[i];
    }

    Swal.fire({
      text: "Do you want to delete '"+bookValue?.name+"' book..!",
      showCancelButton: true,
      showConfirmButton: true,
      focusConfirm: true,
      icon: 'warning'
    }).then((result) => {
      if (result.isConfirmed) {
        this.bookService.deleteBook(id);
        this.router.navigate(['/manage']);
      }
    })
  }

}
