import { Pipe, PipeTransform } from '@angular/core';
import { paramCase } from 'change-case';

import { Product } from '../../core/models/marketplace';
import { environment } from '../../../environments/environment';

@Pipe({
  name: 'productImagePath'
})
export class ProductImagePathPipe implements PipeTransform {

  transform(value: Product): string {
    const path = `${environment.productImageStorageUrl}/${paramCase(value.brand.name)}/${paramCase(value.name)}-${paramCase(value.style)}-${paramCase(value.color.name)}.jpg`;
    return path;
  }

}
