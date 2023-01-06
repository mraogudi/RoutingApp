import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Books, BookService } from '../book.service';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent {
  bookForm!: FormGroup;
  public book!: Books;
  
  constructor(private formBuilder: FormBuilder, private router: Router,
    private bookService: BookService, private route: ActivatedRoute) {
      let id = this.route.snapshot.paramMap.get('id');
      this.book = this.bookService.getBookById(id);
      this.bookForm = this.formBuilder.group({
        name:this.book.name,
        price:this.book.price,
        author:this.book.author,
        desc:this.book.shortDesc
      })
  }

  updateBook(data: FormGroup) {
    let id = this.route.snapshot.paramMap.get('id');
    let name = data.controls['name'].value;
    let price = data.controls['price'].value;
    let author = data.controls['author'].value;
    let desc = data.controls['desc'].value;
    this.bookService.updateBook(name, price, author, desc, id);
    data.reset();
    this.router.navigate(['/home']);
  }

}
