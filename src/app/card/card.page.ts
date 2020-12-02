import { ICards } from './../interfaces/cards';
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
  maskedBalance!: string;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private cardsService: CardsService
  ) {
    this.getCards();
  }

  ngOnInit() {
  }

  ionViewWillLeave(){
   this.cardsService.currentCard = {...this.currentCard};
  }

  showCardDetails() {
    this.router.navigate(['details'], { relativeTo: this.activatedRoute, state: { card: this.currentCard } });
  }

  private getCards() {
    this.cardsService.getCards().subscribe(
      res => {
        this.cards = res;
        this.usdCards = this.cards.filter(card => card.cardCurrency === 'USD');
        this.ngnCards = this.cards.filter(card => card.cardCurrency === 'NGN');
        this.currentCard = this.selectedCardType === 'USD' ? this.usdCards[0] : this.ngnCards[0];
      },
      err => {
      }
    )
  }

  segmentChanged(e: Event) {
    this.slidesIndex = 0;
    this.slides.slideTo(0);
    this.currentCard = this.selectedCardType === 'USD' ? this.usdCards[0] : this.ngnCards[0];
  }

  slideChanged(currency: string) {
    this.slides.getActiveIndex().then(
      index => {
        this.slidesIndex = index;
        this.currentCard = currency === 'NGN' ? this.ngnCards[index] : this.usdCards[index];
      }
    );
  }

  showTransactions() {

  }

  hideBalance() {
    if(this.maskedBalance) {
      this.maskedBalance = '';
      return
    }
    const length = this.currentCard.cardbalance.toString().length;
    this.maskedBalance = ''.padStart(length, '*') + '.**'
  }

}
