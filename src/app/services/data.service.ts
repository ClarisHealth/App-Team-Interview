import { Injectable } from '@angular/core';
import { IAccount } from 'app/types/i-accounts.js';
import { IAccountTransaction } from 'app/types/i-transactions.js';

import { Observable, of } from 'rxjs';
import { accounts as ACCOUNTS }  from '../../../mock-data/accounts.js'
import { accountTranscations as ACCOUNTTRANSACTIONS } from '../../../mock-data/transactions.js'

@Injectable({
    providedIn: 'root'
})
export class DataService {

    constructor() {}


    public getAccounts(): Observable<IAccount[]> {
        const accounts = of(ACCOUNTS);
        return accounts;
    }

    public getAccountTransactions(): Observable<IAccountTransaction[]> {
        const accountTransactions = of(ACCOUNTTRANSACTIONS);
        return accountTransactions;
    }
}
