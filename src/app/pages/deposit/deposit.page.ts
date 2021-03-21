import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Deposit } from 'src/app/modules/deposits/deposit.model';
import { DepositService } from 'src/app/modules/deposits/deposit.service';
import { FeeService } from 'src/app/modules/fees/fee.service';

@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.page.html',
  styleUrls: ['./deposit.page.scss'],
})
export class DepositPage implements OnInit {
  disabled: boolean = true;
  checked: string = 'sender';
  segment: string = 'sender';
  deposit: Deposit = new Deposit(null, {firstname:'', lastname:'', phoneNumber:'', nin:''}, {firstname:'', lastname:'', phoneNumber:''});
  fees: number = 0;
  total: number = 0;
  code: string;
  date: string;

  constructor(private alertController: AlertController, private feeSrv: FeeService, private depositSrv: DepositService) { }

  ngOnInit() {
  }

  async presentConfirmationAlert() {
    const alert = await this.alertController.create({
      cssClass: 'alert-confirm',
      header: 'Confirmation',
      inputs: [
        {
          type: 'text',
          value: 'Emetteur: ' + this.deposit.depositClient.lastname + ' ' +  this.deposit.depositClient.firstname,
          attributes: {
            readOnly: true
          }
        },
        {
          type: 'text',
          value: 'Téléphone: ' +  this.deposit.depositClient.phoneNumber,
          attributes: {
            readOnly: true
          }
        },
        {
          type: 'text',
          value: 'N° CNI: ' +  this.deposit.depositClient.nin,
          attributes: {
            readOnly: true
          }
        },
        {
          type: 'text',
          value: 'Montant à envoyer: ' +  this.deposit.amount,
          attributes: {
            readOnly: true
          }
        },
        {
          type: 'text',
          value: 'Récepteur: ' + this.deposit.withdrawalClient.lastname + ' ' +  this.deposit.withdrawalClient.firstname,
          attributes: {
            readOnly: true
          }
        },
        {
          type: 'text',
          value: 'Téléphone récepteur: ' +  this.deposit.withdrawalClient.phoneNumber,
          attributes: {
            readOnly: true
          }
        },
      ],
      buttons: [
        {
          text: 'Annuler',
          role: 'cancel'
        }, {
          text: 'Confirmer',
          cssClass: 'btn-confirm',
          handler: () => {
            this.postDeposit();
          }
        }
      ]
    });

    await alert.present();
  }
  async presentSuccessAlert() {
    const alert = await this.alertController.create({
      cssClass: 'alert-transfer',
      header: 'Transfert réussi',
      message: '<ion-text>INFOS</ion-text><br><ion-text class="message">Vous avez envoyé ' + this.deposit.amount +' à '+ this.deposit.withdrawalClient.firstname + ' ' +  this.deposit.withdrawalClient.lastname + ' le ' + this.date +'</ion-text><br><br><ion-text>CODE DE TRANSACTION</ion-text><br><ion-text class="code">' + this.code + '</ion-text><ion-row class="icons"><ion-col><ion-icon name="arrow-redo"></ion-icon></ion-col><ion-col><ion-icon name="chatbubble-ellipses-outline"></ion-icon></ion-col></ion-row>'
    });

    await alert.present();
  }

  postDeposit() {
    this.depositSrv.create(this.deposit).subscribe((data: any) => {
      this.code = data.code;
      this.date = data.depositDate.substring(0,10);
      this.presentSuccessAlert();
    });
  }

  onSubmit() {
    this.presentConfirmationAlert();
  }

  next() {
    this.segment = 'recipient';
    this.disabled = !this.disabled;
    this.checked = 'recipient';
  }

  successAlert() {
    this.presentSuccessAlert();
  }

  calculateFees() {
    if (this.deposit.amount != null) {
      this.feeSrv.getFees(this.deposit.amount).subscribe(
        (data: any) => {
          this.fees = data;
          this.total = this.fees + this.deposit.amount;
        }
      );
    }
  }
}
