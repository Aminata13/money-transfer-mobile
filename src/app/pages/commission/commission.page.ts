import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-commission',
  templateUrl: './commission.page.html',
  styleUrls: ['./commission.page.scss'],
})
export class CommissionPage implements OnInit {
  commissions: any[];
  customAlertOptions: any = {
    cssClass: 'alert',
    header: 'Type'
  };

  constructor() {
    this.commissions = [
      {
          "date": "02-02-2020",
          "type": "Dépôt",
          "montant": "200 000"
      },
      {
          "date": "02-02-2020",
          "type": "Dépôt",
          "montant": "200 000"
      },
      {
          "date": "02-02-2020",
          "type": "Dépôt",
          "montant": "200 000"
      },
      {
          "date": "02-02-2020",
          "type": "Dépôt",
          "montant": "200 000"
      },
      {
          "date": "02-02-2020",
          "type": "Dépôt",
          "montant": "200 000"
      },
      {
          "date": "02-02-2020",
          "type": "Dépôt",
          "montant": "200 000"
      },
      {
          "date": "02-02-2020",
          "type": "Dépôt",
          "montant": "200 000"
      },
      {
          "date": "02-02-2020",
          "type": "Dépôt",
          "montant": "200 000"
      },
      {
          "date": "02-02-2020",
          "type": "Dépôt",
          "montant": "200 000"
      },
      {
          "date": "02-02-2020",
          "type": "Dépôt",
          "montant": "200 000"
      },
      {
          "date": "02-02-2020",
          "type": "Dépôt",
          "montant": "200 000"
      },
      {
          "date": "02-02-2020",
          "type": "Dépôt",
          "montant": "200 000"
      },
      {
          "date": "02-02-2020",
          "type": "Dépôt",
          "montant": "200 000"
      },
      {
          "date": "02-02-2020",
          "type": "Dépôt",
          "montant": "200 000"
      }
  ]
  }

  ngOnInit() {
  }

}
