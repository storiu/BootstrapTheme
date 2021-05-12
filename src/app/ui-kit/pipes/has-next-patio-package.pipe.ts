import { Pipe, PipeTransform } from '@angular/core';

import { PatioPackageCard } from '../../core/models/patio-package';
import { patioPackageCards } from '../../core/data/patio-packages';

@Pipe({
  name: 'hasNextPatioPackage'
})
export class HasNextPatioPackagePipe implements PipeTransform {

  transform(value: PatioPackageCard): boolean {
    return patioPackageCards.indexOf(value) < patioPackageCards.length - 1;
  }

}
