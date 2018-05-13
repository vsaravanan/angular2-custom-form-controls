import { Component, OnInit, forwardRef, Input, OnChanges } from '@angular/core';
import { FormControl, ControlValueAccessor, NG_VALUE_ACCESSOR, NG_VALIDATORS } from '@angular/forms';

@Component({
  selector: 'counter-value-app',
  templateUrl: './model-form-component.html',
  styleUrls:  ['./app.component.css'],
  providers: [
    { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => CounterControlComponent), multi: true },
    { provide: NG_VALIDATORS, useExisting: forwardRef(() => CounterControlComponent), multi: true }
  ]
})

export class CounterControlComponent implements ControlValueAccessor, OnChanges {

  propagateChange:any = () => {};
  validateFn:any = () => {};
  
  @Input('currentCounterValue') _currentCounterValue = 0;
  @Input() counterRangeMaxValue;
  @Input() counterRangeMinValue;

  get currentCounterValue() {
    return this._currentCounterValue;
  }
  
  set currentCounterValue(val) {
    this._currentCounterValue = val;
    this.propagateChange(val);
  }

  ngOnChanges(inputs) {
    if (inputs.counterRangeMaxValue || inputs.counterRangeMinValue) {
      this.validateFn = maxMinCountValueRangeValidator(this.counterRangeMaxValue, this.counterRangeMinValue);
    }
  }

  writeValue(value) {
    if (value) {
      this.currentCounterValue = value;
    }
  }

  registerOnChange(fn) {
    this.propagateChange = fn;
  }

  registerOnTouched() {}

  increment() {
    this.currentCounterValue++;
  }

  decrement() {
    this.currentCounterValue--;
  }

  validate(c: FormControl) {
    return this.validateFn(c);
  }
}

export function maxMinCountValueRangeValidator(endValue, startValue) {
  return (c: FormControl) => {
    let err = {
      rangeError: {
        given: c.value,
        max: endValue || 10,
        min: startValue || 0
      }
    };

  return (c.value > +endValue || c.value < +startValue) ? err: null;
  }
}
