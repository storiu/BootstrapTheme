import { Pipe, PipeTransform } from '@angular/core';

import { PatioPackageCard } from '../../core/models/patio-package';
import { patioPackageCards } from '../../core/data/patio-packages';

@Pipe({
  name: 'hasPrevPatioPackage'
})
export class HasPrevPatioPackagePipe implements PipeTransform {

  transform(value: PatioPackageCard): boolean {
    return patioPackageCards.indexOf(value) > 0;
  }

}
