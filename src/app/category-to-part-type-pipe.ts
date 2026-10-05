import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'categoryToPartType',
})
export class CategoryToPartTypePipe implements PipeTransform {
  transform(category: string, uppercase: boolean): string {
    const partType = category.slice(0, -1);
    if (uppercase) {
      return partType[0].toUpperCase() + category.slice(1, -1);
    }
    return partType;
  }
}
