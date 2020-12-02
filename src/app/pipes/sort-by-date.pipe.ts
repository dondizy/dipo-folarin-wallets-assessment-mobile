import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortByDate'
})
export class SortByDatePipe implements PipeTransform {

  transform(value: any): unknown {
    value = value.sort(function(a:any,b:any){
          return new Date(b.TransactionDate).getTime() - new Date(a.TransactionDate).getTime();
        });
    return value;
  }
}
