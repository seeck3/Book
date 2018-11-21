import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { BOOKS } from './data/book-data';
import { Book } from './models/book';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'books';
}
