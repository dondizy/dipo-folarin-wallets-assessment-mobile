export interface ICards {
    cardnumber: string;
    cardtrpe: string;
    cardCurrency: string;
    cardName: string;
    cardAddress: string;
    ZipCode: number;
    CVV: number;
    cardbalance: number;
    isActive: boolean;
    ExpiryMonth: string;
    ExpiryYear: string;
    Transactions: ITransaction[];
}

export interface ITransaction {
    Amount: number;
    narration: string;
    transactiontype: string;
    TransactionDate: string;
}

