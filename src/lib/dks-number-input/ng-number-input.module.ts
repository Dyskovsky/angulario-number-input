import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgNumberInputComponent } from './ng-number-input.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    NgNumberInputComponent
  ],
  exports: [
    NgNumberInputComponent
  ]
})
export class NgNumberInputModule { }
