import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/modules/users/user.model';

@Component({
  selector: 'app-history',
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.scss'],
})
export class HistoryPage implements OnInit {
  user: User;
  role: string;
  segment = 'some';
  transactions: any[];
  agents: any[];
  typeOptions: any = {
    cssClass: 'alert',
    header: 'Type'
  };
  agentOptions: any = {
    cssClass: 'alert',
    header: 'Agent'
  };

  constructor() {
    this.transactions = [
      {
          "date": "02-02-2020",
          "agent": "Ami Sarr",
          "type": "Dépôt",
          "montant": "200 000",
          "frais": "8 000"
      },
      {
          "date": "02-02-2020",
          "agent": "Ami Sarr",
          "type": "Dépôt",
          "montant": "200 000",
          "frais": "8 000"
      },
      {
          "date": "02-02-2020",
          "agent": "Ami Sarr",
          "type": "Dépôt",
          "montant": "200 000",
          "frais": "8 000"
      },
      {
          "date": "02-02-2020",
          "agent": "Ami Sarr",
          "type": "Dépôt",
          "montant": "200 000",
          "frais": "8 000"
      },
      {
          "date": "02-02-2020",
          "agent": "Ami Sarr",
          "type": "Dépôt",
          "montant": "200 000",
          "frais": "8 000"
      },
      {
          "date": "02-02-2020",
          "agent": "Ami Sarr",
          "type": "Dépôt",
          "montant": "200 000",
          "frais": "8 000"
      },
      {
          "date": "02-02-2020",
          "agent": "Ami Sarr",
          "type": "Dépôt",
          "montant": "200 000",
          "frais": "8 000"
      },
      {
          "date": "02-02-2020",
          "agent": "Ami Sarr",
          "type": "Dépôt",
          "montant": "200 000",
          "frais": "8 000"
      },
      {
          "date": "02-02-2020",
          "agent": "Ami Sarr",
          "type": "Dépôt",
          "montant": "200 000",
          "frais": "8 000"
      },
      {
          "date": "02-02-2020",
          "agent": "Ami Sarr",
          "type": "Dépôt",
          "montant": "200 000",
          "frais": "8 000"
      }
    ];
    this.agents = [
      {
        "id": 1,
        "firstname": "Ami",
        "lastname": "Sarr"
      },
      {
        "id": 2,
        "firstname": "Fatou",
        "lastname": "Sow"
      }
    ]
   }

  ngOnInit() {
    this.getCurrentUser();
  }

  segmentChanged(ev: any) {
    console.log(ev.detail.value);
    this.segment = ev.detail.value;
  }

  getCurrentUser() {
    const currentUser = localStorage.getItem('currentUser')!;
    this.user = JSON.parse(currentUser);
    this.role = this.user.role.name;
  }
}
