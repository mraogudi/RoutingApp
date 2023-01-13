import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../book.service';
import { Books } from '../model/Books';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent implements OnInit {
  bookForm!: FormGroup;
  book!: Books;
  
  constructor(private formBuilder: FormBuilder, private router: Router,
    private bookService: BookService, private route: ActivatedRoute) {
      this.bookForm = this.formBuilder.group({
        name:'',
        price:'',
        author:'',
        desc:''
      })
  }
  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    this.bookService.getBookById(id).subscribe((result: Books) => {
      this.book = result;
      this.bookForm.patchValue({
        name:result.name,
        price:result.price,
        author:result.author,
        desc:result.shortDesc
      })
    });
  }

  updateBook(data: FormGroup) {
    let name = data.controls['name'].value;
    let price = data.controls['price'].value;
    let author = data.controls['author'].value;
    let desc = data.controls['desc'].value;
    this.bookService.updateBook(name, price, author, desc, this.book.id);
    //data.reset();
    //this.router.navigate(['/manage']);
  }

}
