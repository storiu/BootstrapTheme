import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'archincer-number-input',
  templateUrl: './number-input.component.html',
  styleUrls: ['./number-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NumberInputComponent),
      multi: true,
    }
  ]
})
export class NumberInputComponent implements ControlValueAccessor {

  @Input() type = 'number';
  @Input() value: number;
  @Input() min = 0;
  @Input() step = 1;
  @Input() width;
  @Input() readonly;

  onChange;

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  setDisabledState(isDisabled: boolean): void {
  }

  registerOnTouched(fn: any): void {
  }

  writeValue(obj: any): void {
    this.value = obj;
  }

  addValue(step): void {
    this.value = Number(this.value) + step;
    this.value = (this.value < 0) ? 0 : this.value;
    if (this.onChange) {
      this.onChange(this.value);
    }
  }

  change(value): void {
    value = Number(value);
    // only when change method registered
    if (this.onChange) {
      this.onChange(value);
    }
  }
}
