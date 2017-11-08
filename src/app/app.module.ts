import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { DksNumberInputModule } from '../dks-number-input';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DksNumberInputModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
