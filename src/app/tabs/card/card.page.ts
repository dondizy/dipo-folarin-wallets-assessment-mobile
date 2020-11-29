import { ICards } from './../../interfaces/cards';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CardsService } from 'src/app/services/cards/cards.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.page.html',
  styleUrls: ['./card.page.scss'],
})
export class CardPage implements OnInit {

  cards!: ICards;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private cardsService: CardsService
  ) {
    this.getCards();
   }

  ngOnInit() {
  }

  segmentChanged(e: Event) {
    console.log(e)
  }

  showCardDetails() {
    console.log('Show card details');
    this.router.navigate(['/', 'card-details'])
  }

  private getCards() {
    this.cardsService.getCards().subscribe(
      res => {
        console.log(res);
        this.cards = res;
      },
      err => {
        console.log(err);
      }
    )
  }
}
