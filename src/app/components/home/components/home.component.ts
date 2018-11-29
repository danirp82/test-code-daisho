import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { AuthenticationService } from './../../../core/services/authentication.service';
import { User } from './../../../shared/models/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  currentUser: User;
  currentUserSubscription: Subscription;
  constructor(private _authenticationService: AuthenticationService,
              private _router: Router
  ) {
      this.currentUserSubscription = this._authenticationService.currentUser.subscribe(user => {
        this.currentUser = user;
      });
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.currentUserSubscription.unsubscribe();
}

  public logout(): void {
    this._authenticationService.logout();
    this._router.navigate(['/login']);
  }

}
