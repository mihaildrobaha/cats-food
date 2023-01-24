import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'portionDeclination',
})
export class PortionDeclinationPipe implements PipeTransform {
  transform(value: number): string {
    let stringValue: string = value.toString();

    let last2char: string = '';
    if (stringValue[stringValue.length - 2]) {
      last2char =
        stringValue[stringValue.length - 2] +
        stringValue[stringValue.length - 1];
    }

    if (last2char === '12' || last2char === '13' || last2char === '14') {
      return `${value} порций`;
    }

    if (last2char === '01') {
      return `${value} порция`;
    }

    if (last2char === '11') {
      return `${value} порций`;
    }

    if (stringValue === '1') {
      return `${value} порция`;
    }

    if (
      stringValue[stringValue.length - 1] === '2' ||
      stringValue[stringValue.length - 1] === '3' ||
      stringValue[stringValue.length - 1] === '4'
    ) {
      return `${value} порции`;
    }

    if (stringValue[stringValue.length - 1] === '1') {
      return `${value} порция`;
    }

    return `${value} порций`;
  }
}
