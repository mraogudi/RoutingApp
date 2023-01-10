import { Router } from '@angular/router';
import { BookService } from './../book.service';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent {
  bookForm!: FormGroup;
  constructor(private formBuilder: FormBuilder,
    private bookService: BookService, private router: Router) {
    this.bookForm = this.formBuilder.group({
      name:'',
      price:'',
      author:'',
      desc:''
    })
  }

  addBook(data: FormGroup) {
    let name = data.controls['name'].value;
    let price = data.controls['price'].value;
    let author = data.controls['author'].value;
    let desc = data.controls['desc'].value;
    this.bookService.addBook(name, price, author, desc).subscribe((result: Object) => {
      data.reset();
      this.router.navigate(['/home']);
    });
  }

  goToList() {
    this.router.navigate(['/home']);
  }

}
