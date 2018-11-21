import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { Book } from '../../models/book';

import { BookService } from '../../services';

@Component({
  selector: 'app-book-new',
  templateUrl: './book-new.component.html',
  styleUrls: ['./book-new.component.css'],
})
export class BookNewComponent implements OnInit {
  book = new Book();

  @Output()
  createBook = new EventEmitter<Book>();

  constructor(
    private readonly bookSerivce: BookService,
    private readonly router: Router
  ) {}

  ngOnInit() {}
  onSubmit(event: Event, form: NgForm) {
    event.preventDefault();
    console.log('submitting form', form.value);

    // this.books.push(form.value);
    this.bookSerivce.createBook(form.value).subscribe(
      () => {
        this.createBook.emit(form.value);
        this.book = new Book();
        form.reset();
        this.router.navigateByUrl('/books');
      },
      error => {
        console.log(error);
      }
    );

    // console.log('books', this.books);
  }
}
