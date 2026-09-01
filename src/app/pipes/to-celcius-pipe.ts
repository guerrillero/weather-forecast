import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toCelcius',
})
export class ToCelciusPipe implements PipeTransform {
  transform(value: number, decimal: number = 0): unknown {
    let celcius = (value - 32) * 5/9;
    return Number(celcius.toFixed(decimal));
  }
}
