import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-fees',
  templateUrl: './fees.page.html',
  styleUrls: ['./fees.page.scss'],
})
export class FeesPage implements OnInit {
  amount: number = 0;
  submitted = false;

  constructor(private alertController: AlertController) {
  }

  ngOnInit() {
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'alert',
      header: 'Calculateur',
      message: 'Pour une transaction de 300 000, les frais sont égals à:<br> <strong>12 000 XOF</strong>',
      buttons: ['Retour']
    });

    await alert.present();
  }


  onSubmit() {
    this.presentAlert();
  }
}
