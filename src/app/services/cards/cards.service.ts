import { ICards } from './../../interfaces/cards';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CardsService {

  public currentCard!: ICards;

  constructor(
    private http: HttpClient
  ) { }

  getCards(): Observable<ICards[]> {
    return this.http.get<ICards[]>('../../../assets/cards.json').pipe(
      map(
        res => {
          console.log(res)
          res = res.map(
            card => {
              card.Transactions = card.Transactions.map(
                txn => {
                  txn.TransactionDate = txn.TransactionDate.split(' ')[0];
                  return txn;
                }
              )
              card.Transactions = card.Transactions.sort(function(a:any,b:any){
                return new Date(b.TransactionDate).getTime() - new Date(a.TransactionDate).getTime();
              });
              return card
            }
          )
          return res;
        }
      )
    );
  }
}
