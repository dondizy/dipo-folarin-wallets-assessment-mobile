import { ITransaction, ICards } from './../../interfaces/cards';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss']
})
export class TransactionComponent implements OnInit {
  
  @Input('transaction') transaction!: ITransaction
  @Input('card') currentCard!: ICards

  constructor() { }

  ngOnInit(): void {
  }

}
