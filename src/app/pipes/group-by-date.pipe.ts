import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'groupByDate'
})
export class GroupByPipe implements PipeTransform {
  transform(collection: Array<any>, property: string = 'shortTransactionDate'): Array<any> {
    if (!collection) {
      return [];
    }
    const gc = collection.reduce((previous, current) => {
      if (!previous[current[property]]) {
        previous[current[property]] = [];
      }
      previous[current[property]].push(current);
      return previous;
    }, {});
    return Object.keys(gc).map(
      date => (
        {
          date: gc[date][0].TransactionDate,
          transactions: gc[date]
        }
      ));
  }
}