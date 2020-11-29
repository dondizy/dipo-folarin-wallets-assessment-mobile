import { ICards } from './../../interfaces/cards';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CardsService } from 'src/app/services/cards/cards.service';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-card',
  templateUrl: './card.page.html',
  styleUrls: ['./card.page.scss'],
})
export class CardPage implements OnInit {
  @ViewChild('slides', { static: false }) slides!: IonSlides
  slidesIndex = 0;
  cards!: ICards[];
  ngnCards!: ICards[];
  usdCards!: ICards[];
  currentCard!: ICards;
  selectedCardType = 'USD';

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private cardsService: CardsService
  ) {
    this.getCards();
  }

  ngOnInit() {
  }

  showCardDetails() {
    console.log('Show card details');
    this.router.navigate(['/', 'card-details'], { state: { card: this.currentCard } });
  }

  private getCards() {
    this.cardsService.getCards().subscribe(
      res => {
        console.log(res);
        this.cards = res;
        this.usdCards = this.cards.filter(card => card.cardCurrency === 'USD');
        this.ngnCards = this.cards.filter(card => card.cardCurrency === 'NGN');
        console.log(this.selectedCardType);
        this.currentCard = this.selectedCardType === 'USD' ? this.usdCards[0] : this.ngnCards[0];
      },
      err => {
        console.log(err);
      }
    )
  }

  segmentChanged(e: Event) {
    console.log(e);
    console.log(this.selectedCardType);
    this.slidesIndex = 0;
    this.slides.slideTo(0);
    this.currentCard = this.selectedCardType === 'USD' ? this.usdCards[0] : this.ngnCards[0];
  }

  slideChanged(currency: string) {
    console.log(this.slides);
    this.slides.getActiveIndex().then(
      index => {
        console.log(index);
        this.slidesIndex = index;
        this.currentCard = currency === 'NGN' ? this.ngnCards[index] : this.usdCards[index];
        console.log('currentcard is', this.currentCard);
      }
    );
  }

  showTransactions() {

  }

}
