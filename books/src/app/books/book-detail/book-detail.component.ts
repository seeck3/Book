import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';

import { Book } from 'src/app/models/book';

import { BookService } from '../../services';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css'],
})
export class BookDetailComponent implements OnInit {
  @Input()
  book: Book;
  constructor(
    private readonly bookSerivce: BookService,
    private readonly route: ActivatedRoute
  ) {}

  ngOnInit() {
    // this.route.paramMap.subscribe(params => {
    //   const bookId = params.get('book_id');

    //   this.bookSerivce.getBook(bookId).subscribe(book => (this.book = book));
    //   // console.log(params.get('book_id'));
    // });
    this.route.paramMap
      .pipe(
        map(params => params.get('book_id')),
        switchMap(bookId => this.bookSerivce.getBook(bookId))
      )
      .subscribe(book => (this.book = book));
  }
}
