import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'highLight'
})
export class HighLightPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
