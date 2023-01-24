import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'declination',
})
export class DeclinationPipe implements PipeTransform {
  transform(value: number): string {
    let stringValue: string = value.toString();

    let last2char: string = '';
    if (stringValue[stringValue.length - 2]) {
      last2char =
        stringValue[stringValue.length - 2] +
        stringValue[stringValue.length - 1];
    }

    if (last2char === '12' || last2char === '13' || last2char === '14') {
      return `${value} мышей`;
    }

    if (last2char === '01') {
      return `${value} мышь`;
    }

    if (last2char === '11') {
      return `${value} мышей`;
    }

    if (stringValue === '1') {
      return `мышь`;
    }

    if (
      stringValue[stringValue.length - 1] === '2' ||
      stringValue[stringValue.length - 1] === '3' ||
      stringValue[stringValue.length - 1] === '4'
    ) {
      return `${value} мыши`;
    }

    if (stringValue[stringValue.length - 1] === '1') {
      return `${value} мышь`;
    }

    return `${value} мышей`;
  }
}
