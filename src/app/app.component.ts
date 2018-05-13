import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { maxMinCountValueRangeValidator } from './model-form-component';

@Component({
  selector: 'my-modal-form-app',
  templateUrl: './app.component.html',
  styleUrls:  ['./app.component.css'],
})
 
export class AppComponent implements OnInit{

  form:FormGroup;
  currentCounterValue = 8;
  startValue = 4;
  endValue = 16;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group({ 
      counter: this.currentCounterValue
    });
  }
}