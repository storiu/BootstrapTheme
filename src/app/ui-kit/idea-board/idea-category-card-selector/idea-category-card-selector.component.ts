import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { AvailableProjectAccessoryType, ProjectAccessoryType } from '../../../core/models/project';

@Component({
  selector: 'archincer-idea-category-card-selector',
  templateUrl: './idea-category-card-selector.component.html',
  styleUrls: ['./idea-category-card-selector.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => IdeaCategoryCardSelectorComponent),
      multi: true,
    }
  ]
})
export class IdeaCategoryCardSelectorComponent implements ControlValueAccessor {

  value: any;
  onChange;

  availableProjectAccessoryTypes = [
    { label: 'All', value: null, },
    { label: 'Patios', value: AvailableProjectAccessoryType.Patio, image: 'assets/images/idea-categories/patio.png' },
    {
      label: 'Walkways',
      value: AvailableProjectAccessoryType.Walkway,
      image: 'assets/images/idea-categories/walkway.png'
    },
    {
      label: 'Pool Patios',
      value: AvailableProjectAccessoryType.PoolPatio,
      image: 'assets/images/idea-categories/pool-patio.png'
    },
    {
      label: 'Retaining Walls',
      value: AvailableProjectAccessoryType.RetainingWall,
      image: 'assets/images/idea-categories/retaining-wall.png'
    },
    {
      label: 'Driveways',
      value: AvailableProjectAccessoryType.DrivewayParking,
      image: 'assets/images/idea-categories/driveway-parking.png'
    },
  ];

  constructor() {
  }

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

  change(value: ProjectAccessoryType): void {
    // only when change method registered
    this.value = value;
    if (this.onChange) {
      this.onChange(value);
    }
  }
}
