import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from './product.model';

@Pipe({
  name: 'amountProducts',
})
export class AmountProductsPipe implements PipeTransform {
  transform(products: IProduct[]): IProduct[] {
    if (!products) return [];

    return [...new Map(products.map((p) => [p.id, p])).values()];
  }
}
