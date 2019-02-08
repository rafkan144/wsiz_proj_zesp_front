import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'maxLength'
})
export class MaxLengthPipe implements PipeTransform {

  transform(value: string, length: number): any {
    if (!value) {
        return '';
    }

    return value.substr(0, length);
  }

}
