import { Injectable } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
import { ScrollToConfigOptions, ScrollToService } from '@nicky-lenaers/ngx-scroll-to';

import { ScrollPosition } from '../data/scroll-pos';
import { ToastrService } from './toastr.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(
    private scrollToService: ScrollToService,
    private toastr: ToastrService,
    private router: Router
  ) { }

  scrollToTop(): void {
    this.scrollToService.scrollTo({ target: ScrollPosition.Root });
  }

  findInvalidField(form: FormGroup, labelGroup: any, prefix: string, container?: string, offset = -300): boolean {
    if (!form.invalid) {
      return true;
    } else {
      const asArray = Object.keys(form.controls).map(key => {
        return { key, form: form.controls[key] };
      });
      const invalidField = asArray.find(x => x.form.invalid);
      const fieldName = labelGroup[invalidField.key] || invalidField.key;
      const isLocationField = fieldName === 'latitude' || fieldName === 'longitude';
      if (isLocationField) {
        this.scrollAndBounceInvalidField(fieldName, `${prefix}_address`, container, offset, 'Please select an address from the dropdown list.');
        return false;
      }
      // check if invalid field is form array
      const invalidFieldForm = invalidField.form as FormArray;
      if (!invalidFieldForm.controls) {
        this.scrollAndBounceInvalidField(fieldName, `${prefix}_${invalidField.key}`, container, offset);
      } else {
        // check if the form is form array
        if (invalidFieldForm.controls.length) {
          const index = invalidFieldForm.controls.findIndex(x => x.invalid);
          const invalidFormArrayObject = invalidFieldForm.at(index) as FormGroup;
          this.findInvalidField(invalidFormArrayObject, labelGroup, `${prefix}_${invalidField.key}_${index}`, container, offset);
        } else {
          this.findInvalidField(invalidField.form as FormGroup, labelGroup, `${prefix}_${invalidField.key}`, container, offset);
        }
      }
      return false;
    }
  }

  private scrollAndBounceInvalidField(fieldName: string, target: string, container: string, offset: number, message?: string): void {
    const scrollConfig: ScrollToConfigOptions = { target, offset };
    if (container) {
      scrollConfig.container = container;
    }
    this.scrollToService.scrollTo(scrollConfig);
    this.bounceInput(target);
    this.toastr.warning(message || `${fieldName} is required.`, 'Validation');
  }

  bounceInput(key): void {
    const element = document.getElementById(key);
    if (!element) {
      // log for unexpected validation check error
      console.log(`validation option error, ${key} is missing`);
      return;
    }
    element.classList.add('invalid');
    setTimeout(() => {
      if (element) {
        // user can navigate to different page without waiting for 6 second
        element.classList.remove('invalid');
      }
    }, 6000);
  }
}
