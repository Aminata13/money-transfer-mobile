import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.page.html',
  styleUrls: ['./deposit.page.scss'],
})
export class DepositPage implements OnInit {
  disabled: boolean = true;
  checked: string = 'sender';
  segment: string = 'sender';
  deposit: any;
  test: string = 'stacked'

  constructor(private alertController: AlertController) { }

  ngOnInit() {
  }

  async presentConfirmationAlert() {
    const alert = await this.alertController.create({
      cssClass: 'alert-confirm',
      header: 'Confirmation',
      inputs: [
        {
          type: 'text',
          value: 'Emetteur: Diallo Saliou',
          attributes: {
            readOnly: true
          }
        },
        {
          type: 'text',
          value: 'Téléphone: 77 007 77 07',
          attributes: {
            readOnly: true
          }
        },
        {
          type: 'text',
          value: 'N° CNI: 1 291 1998 23 221',
          attributes: {
            readOnly: true
          }
        },
        {
          type: 'text',
          value: 'Montant à envoyer: 350 000 XOF',
          attributes: {
            readOnly: true
          }
        },
        {
          type: 'text',
          value: 'Récepteur: Diallo Mariama',
          attributes: {
            readOnly: true
          }
        },
        {
          type: 'text',
          value: 'Téléphone récepteur: 77 008 08 08',
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
            this.presentSuccessAlert();
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
      message: '<ion-text>INFOS</ion-text><br><ion-text class="message">Vous avez envoyé 350 000 à DIALLO Mariama le 2020-02-23</ion-text><br><br><ion-text>CODE DE TRANSACTION</ion-text><br><ion-text class="code">234 - 219 -203</ion-text><ion-row class="icons"><ion-col><ion-icon name="arrow-redo"></ion-icon></ion-col><ion-col><ion-icon name="chatbubble-ellipses-outline"></ion-icon></ion-col></ion-row>'
    });

    await alert.present();
  }

  onSubmit() {
    console.log('submitted');
  }

  next() {
    this.segment = 'recipient';
    this.disabled = !this.disabled;
    this.checked = 'recipient';
  }

  temp() {
    this.presentConfirmationAlert();
  }

  successAlert() {
    this.presentSuccessAlert();
  }
}
