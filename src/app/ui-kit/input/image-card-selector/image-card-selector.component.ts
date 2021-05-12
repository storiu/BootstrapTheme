import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

export interface CardOption {
  value: any;
  label: string;
  image: string;
  selected?: boolean;
}

@Component({
  selector: 'archincer-image-card-selector',
  templateUrl: './image-card-selector.component.html',
  styleUrls: ['./image-card-selector.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ImageCardSelectorComponent),
      multi: true,
    }
  ]
})
export class ImageCardSelectorComponent implements ControlValueAccessor {

  @Input() options: CardOption[] = [];
  @Input() cols = 3;
  @Input() readonly;

  value;
  onChange;

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  setDisabledState(isDisabled: boolean): void {
  }

  registerOnTouched(fn: any): void {
  }

  writeValue(obj: any[]): void {
    this.options.forEach(x => x.selected = false);
    this.options.forEach(x => {
      obj.forEach(val => {
        if (x.value === val) {
          x.selected = true;
        }
      });
    });
    this.change();
  }

  selectCard(option: CardOption): void {
    if (this.readonly) {
      return;
    }
    option.selected = !option.selected;
    this.change();
  }

  private change(): void {
    if (this.onChange) {
      this.onChange(this.options.filter(x => x.selected).map(x => x.value));
    }
  }

}
