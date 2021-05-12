import { Pipe, PipeTransform } from '@angular/core';

import { nextPatioPackage } from '../../core/utils/patio-package.util';
import { PatioPackageCard } from '../../core/models/patio-package';

@Pipe({
  name: 'nextPatioPackage'
})
export class NextPatioPackagePipe implements PipeTransform {

  transform(value: PatioPackageCard, isForward = true): PatioPackageCard {
    return nextPatioPackage(value, isForward);
  }

}
