import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';

import { UserService } from './../../../core/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public registerForm: FormGroup;

  public inputRequired = 'Required field';

  constructor(  private _formBuilder: FormBuilder,
                private _userService: UserService,
                private _router: Router
  ) { }

  ngOnInit() {
    this.buildForm();
  }

  private buildForm(): void {
    this.registerForm = this._formBuilder.group({
        userName: ['', [Validators.required, Validators.maxLength(32), this.userNameFormat]],
        email: ['', [Validators.required, Validators.email]],
        password: ['', Validators.required]
    });
  }

  userNameFormat( control: AbstractControl ) {
    const EMAIL_REGEXP = /^[\w&.-]+$/;

    if (!EMAIL_REGEXP.test(control.value)) {
        return { 'positive': true };
    }
    return null;
  }

  public submit(): void {

    if (this.registerForm.invalid) {
      return;
    }

    this._userService.register(this.registerForm.value)
            .pipe(first())
            .subscribe(
                data => {
                    this._router.navigate(['/login']);
                },
                error => {
                    console.log('Error =>', error);
                });
  }

}
