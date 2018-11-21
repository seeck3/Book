import { Component, OnInit } from '@angular/core';

import { Book } from '../../models/book';

import { BookService } from '../../services';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
})
export class BookListComponent implements OnInit {
  books: Book[] = [];
  selectedBook: Book;

  constructor(private readonly bookService: BookService) {}

  ngOnInit() {
    console.log(this.bookService);
    // getting all book database from service
    this.bookService.getBooks().subscribe(books => {
      console.log('books from observable', books);
      this.books = books;
    });
  }

  onSelect(book: Book): void {
    console.log('Selecting.....', book);
    // this is simple version of if statement        true : false
    this.selectedBook = this.selectedBook === book ? null : book;
    // this is regular version of if statement
    // if (this.selectedBook === book) {
    //   this.selectedBook = null;
    // } else {
    //   this.selectedBook = book;
    // }
  }
  onCreate(book: Book): void {
    console.log('creating book', book);
    this.bookService.createBook(book).subscribe(createdBook => {
      // this.books.push(createdBook);

      this.books = [...this.books, createdBook];
    });
    // this.books.push(book);
  }
  onDelete(id: number) {
    console.log('Deleting Book');
    this.bookService.deleteBook(id).subscribe(deletedBook => {
      this.books = this.books.filter(book => book._id !== deletedBook._id);
    });
  }

  onEvent(event: Event) {
    console.log('Eventing.............');

    event.stopPropagation();
  }
}
