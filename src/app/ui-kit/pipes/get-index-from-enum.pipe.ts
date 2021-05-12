import { Pipe, PipeTransform } from '@angular/core';

import { getIndexFromEnum } from '../../core/utils/enum.util';

@Pipe({
  name: 'getIndexFromEnum'
})
export class GetIndexFromEnumPipe implements PipeTransform {

  transform(current: any, source: any): number {
    return getIndexFromEnum(current, source);
  }

}
