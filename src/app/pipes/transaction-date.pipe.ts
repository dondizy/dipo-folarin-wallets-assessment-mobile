import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transactionDate'
})
export class TransactionDatePipe implements PipeTransform {

  transform(value: any, monthYear?: boolean): string {
    let x = value;
    if (monthYear) {
      x = value.map(
        (e: any) => {
          e['shortTransactionDate'] = [e.TransactionDate.split('-')[0], e.TransactionDate.split('-')[1]].join('-');
          return e;
        }
      )
    }
    else {
      x = value.split(' ')[0];
    }
    return x
  }

}
