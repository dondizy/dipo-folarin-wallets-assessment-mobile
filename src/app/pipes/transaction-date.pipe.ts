import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transactionDate'
})
export class TransactionDatePipe implements PipeTransform {

  transform(value: string): string {
    return value.split(' ')[0];
  }

}
