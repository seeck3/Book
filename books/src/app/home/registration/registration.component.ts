import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../../models';
import { UserService } from '../../services';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent implements OnInit {
  registrationErrors: string[] = [];
  user = new User();

  constructor(
    private readonly auth: UserService,
    private readonly router: Router
  ) {}

  ngOnInit() {}

  onSubmit(user: User) {
    this.auth.register(user).subscribe(loggedInUser => {
      this.router.navigateByUrl('books');
    });
  }
}
