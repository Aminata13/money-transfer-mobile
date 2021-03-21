import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { FeeService } from 'src/app/modules/fees/fee.service';

@Component({
  selector: 'app-fees',
  templateUrl: './fees.page.html',
  styleUrls: ['./fees.page.scss'],
})
export class FeesPage implements OnInit {
  amount: number = 0;
  fees: number = 0;
  submitted = false;

  constructor(private alertController: AlertController, private feeSrv: FeeService) {
  }

  ngOnInit() {
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'alert-fees',
      header: 'Calculateur',
      message: 'Pour une transaction de 300 000, les frais sont égals à:<br> <strong>' + this.fees + ' XOF</strong>',
      buttons: ['Retour']
    });

    await alert.present();
  }


  onSubmit() {
    this.feeSrv.getFees(this.amount).subscribe(
      (data: any) => {
        this.fees = data;
      }
    );
    this.presentAlert();
  }
}
