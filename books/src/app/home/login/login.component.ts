import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../../models';
import { UserService } from '../../services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  errors: string[] = [];
  user = new User();

  constructor(
    private readonly auth: UserService,
    private readonly router: Router
  ) {}

  ngOnInit() {}

  onSubmit(user: User) {
    this.auth.login(user).subscribe(
      () => {
        this.router.navigateByUrl('books');
      },
      error => {
        console.log('an error', error);

        this.handleErrors(error.error);
      }
    );
  }

  private handleErrors(errors: string[] | Error | string): void {
    if (Array.isArray(errors)) {
      this.errors = errors;
    } else {
      this.errors = [typeof errors === 'string' ? errors : errors.message];
    }
  }
}
