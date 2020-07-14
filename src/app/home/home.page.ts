import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import List_product from '../../assets/json/list_product.json';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  total_panier=0

  list_product=List_product

  constructor(public alertController: AlertController) {}

  lovesProduct(i){

    if(this.list_product[i].loves){
      this.list_product[i].loves=false
    }else{
      this.list_product[i].loves=true
    }
  }

  addProduct(i){
    
    if(this.list_product[i].added){
      this.total_panier--
      this.list_product[i].added=false
    }else{
      this.total_panier++
      this.list_product[i].added=true
    }

  }

  hiddDescription(i){
    
    if(this.list_product[i].hidd_description){
      this.list_product[i].hidd_description=false
    }else{
      this.list_product[i].hidd_description=true
    }
  }

  async presentAlertConfirm() {
    var messageAlert="<ion-list>"
    for(var i=0; i<this.list_product.length;i++){
      if(this.list_product[i].added){
        messageAlert+=`
        <ion-card >
          <img src="`+this.list_product[i].image+`" style="width:50px;" />
          `+this.list_product[i].name+`,
          `+this.list_product[i].price+`
        </ion-card>
        `
      }
    }
    messageAlert+="</ion-list>"
    console.log(messageAlert)
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'COMMANDE!',
      message:messageAlert,
      buttons: [
        {
          text: 'Retour',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('LOL');
          }
        }, {
          text: 'Commander',
          handler: () => {
            console.log('Comande effectué');
            this.total_panier=0
            for(var i=0;i<this.list_product.length;i++){
              this.list_product[i].added=false
            }
          }
        }
      ]
    });

    await alert.present();
  }

}
