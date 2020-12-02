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
    return this.http.get<ICards[]>('../../../assets/cards.json');
  }
}
