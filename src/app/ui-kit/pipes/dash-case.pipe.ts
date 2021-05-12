import { Pipe, PipeTransform } from '@angular/core';

import { enumToDashCase } from '../../core/utils/enum.util';

@Pipe({
  name: 'dashCase'
})
export class DashCasePipe implements PipeTransform {

  transform(value: string): string {
    return enumToDashCase(value);
  }

}
