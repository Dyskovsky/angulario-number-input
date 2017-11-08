import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DksNumberInputComponent } from './dks-number-input.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    DksNumberInputComponent
  ],
  exports: [
    DksNumberInputComponent
  ]
})
export class DksNumberInputModule { }
