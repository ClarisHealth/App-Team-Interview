import { Component, OnInit } from '@angular/core';

import { animate, state, style, transition, trigger } from '@angular/animations';
import { MatTableDataSource } from '@angular/material/table';
import { DataService } from 'app/services/data.service';
import { IAccount } from 'app/types/i-accounts';

@Component({
    selector: 'app-account',
    templateUrl: './account.component.html',
    styleUrls: ['./account.component.css'],
    animations: []
})
export class AccountComponent implements OnInit {
    public accountColumns: string[] = ['Id', 'Limit', 'Products', 'Details'];
    public accountData: IAccount[]

    constructor(private _dataService: DataService) { }

    ngOnInit() {
        this.accountData = [];
        this.fetchAccountData();
    }


    private fetchAccountData() {
        this._dataService.getAccounts().subscribe(accounts => { 
            this.accountData = accounts;
        })
    }
}
