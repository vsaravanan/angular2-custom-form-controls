import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CounterControlComponent } from './model-form-component';
import { AppComponent } from './app.component';

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  declarations: [AppComponent, CounterControlComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}