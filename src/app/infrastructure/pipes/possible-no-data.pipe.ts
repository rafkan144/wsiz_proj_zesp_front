import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'possibleNoData'
})
export class PossibleNoDataPipe implements PipeTransform {

  transform(value: any): any {
    if (!value) {
        return ' - ';
    }

    return value;
  }

}
