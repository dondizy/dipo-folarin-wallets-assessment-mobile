import { CardsService } from 'src/app/services/cards/cards.service';
import { ICards } from './../../interfaces/cards';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.page.html',
  styleUrls: ['./transactions.page.scss'],
})
export class TransactionsPage implements OnInit {
  currentCard!: ICards;
  constructor(
    private cardsService: CardsService
  ) {
    this.currentCard = this.cardsService.currentCard;
  }
  
  ngOnInit() {
  }
  
  ionViewWillEnter(){
    this.currentCard = this.cardsService.currentCard;
  }
}
