import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';

import { RegisterComponent } from './../register/components/register.component';
import { routes } from './register.routing';


@NgModule({
  declarations: [
    RegisterComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild(routes),
  ]
})
export class RegisterModule { }
