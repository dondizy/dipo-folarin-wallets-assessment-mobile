import { ICards } from './../interfaces/cards';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.page.html',
  styleUrls: ['./card-details.page.scss', '../card/card.page.scss'],
})
export class CardDetailsPage implements OnInit {

  card!: ICards
  
  constructor(
    private router: Router
  ) {
  }
  
  ngOnInit() {
    this.card = this.router.getCurrentNavigation()?.extras?.state?.card;
  }

}
