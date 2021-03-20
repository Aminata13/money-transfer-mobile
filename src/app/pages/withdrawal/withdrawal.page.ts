import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-withdrawal',
  templateUrl: './withdrawal.page.html',
  styleUrls: ['./withdrawal.page.scss'],
})
export class WithdrawalPage implements OnInit {
  disabled: boolean = false;
  checked: string = 'recipient';
  segment: string = 'recipient';
  nin: string = '';

  constructor(public router: Router, private alertController: AlertController) { }

  ngOnInit() {
  }

  async presentConfirmationAlert() {
    const alert = await this.alertController.create({
      cssClass: 'alert-confirm',
      header: 'Confirmation',
      inputs: [
        {
          type: 'text',
          value: 'Bénéficiaire: Diallo Mariama',
          attributes: {
            readOnly: true
          }
        },
        {
          type: 'text',
          value: 'Téléphone: 77 008 08 08',
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
          value: 'Montant reçu: 350 000 XOF',
          attributes: {
            readOnly: true
          }
        },
        {
          type: 'text',
          value: 'Envoyeur: Diallo Saliou',
          attributes: {
            readOnly: true
          }
        },
        {
          type: 'text',
          value: 'Téléphone envoyeur: 77 007 77 07',
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
            this.router.navigateByUrl('/tabs/home');
          }
        }
      ]
    });

    await alert.present();
  }

  next() {
    this.segment = 'sender';
    this.disabled = !this.disabled;
    this.checked = 'sender';
  }

  temp() {
    this.presentConfirmationAlert();
  }
}
