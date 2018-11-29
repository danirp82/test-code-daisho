import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';

import { AuthenticationService } from './../../../core/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;

  public inputRequired = 'Required field';
  public error = false;
  public message = 'Username or password is incorrect';

  constructor(private _authenticationService: AuthenticationService,
              private _formBuilder: FormBuilder,
              private _router: Router
  ) { }

  ngOnInit() {
    this.buildForm();
  }

  private buildForm(): void {
    this.loginForm = this._formBuilder.group({
        userName: ['', Validators.required],
        password: ['', Validators.required]
    });
  }

  public login() {
    const { userName, password} = this.loginForm.value;
    this._authenticationService.login(userName, password)
      .pipe(first())
      .subscribe(
          data => {
              this._router.navigate(['home']);
          },
          error => {
            console.log('Error =>', error);
            this.error = true;
          });
  }
}
