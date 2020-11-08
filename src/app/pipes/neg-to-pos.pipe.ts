import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'negToPos'
})
export class NegToPosPipe implements PipeTransform {

  transform(val: string): number {
    return parseFloat(val);
  }

}
