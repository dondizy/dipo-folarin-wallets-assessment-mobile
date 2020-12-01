import { CardsService } from 'src/app/services/cards/cards.service';
import { ICards } from './../interfaces/cards';
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
    console.log(this.currentCard);
  }


  events = [{
    date: '2017-12-26',
    events: [{
      id: 1,
      title: 'First event'
    }, {
      id: 3,
      title: 'Third event'
    }]
  },{
    date: '2017-12-26',
    events: [{
      id: 4,
      title: 'Fourth event'
    }, {
      id: 5,
      title: 'Fifth event'
    }]
  }, {
    date: '2017-12-30',
    events: [{
      id: 2,
      title: 'Second event'
    }]
  }, {
    date: '2017-12-31',
    events: [{
      id: 4,
      title: 'Last event'
    }]
  }];

}
