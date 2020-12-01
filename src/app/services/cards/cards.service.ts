import { ICards } from './../../interfaces/cards';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CardsService {

  public cards!: ICards[];
  public currentCard!: ICards;

  constructor(
    private http: HttpClient
  ) { }

  getCards(): Observable<ICards[]> {
    return this.http.get<ICards[]>('../../../assets/cards.json').pipe(
      tap(
        res => {
          this.cards = res;
        }
      )
    );
  }
}
