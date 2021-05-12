import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'after'
})
export class AfterPipe implements PipeTransform {

  transform(current: any, option: any, after: any): boolean {
    const order = Object.keys(option).map(key => option[key]);
    return order.findIndex(x => x === current) > order.findIndex(x => x === after);
  }

}
