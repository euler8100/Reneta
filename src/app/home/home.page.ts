import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  total_panier=0

  list_product=[
    {
      name:"Produit 1",
      price:"$ 45",
      description:"Ad dolor amet mollit culpa dolore mollit nisi est cillum anim do irure incididunt sint ut excepteur ea in ut.",
      loves:false,
      added:false,
      hidd_description:true,
      image:"assets/imgs/bg-lanches.jpg"
    },
    {
      name:"Produit 2",
      price:"€ 30",
      description:"Ad dolor amet mollit culpa dolore mollit nisi est cillum anim do irure incididunt sint ut excepteur ea in ut.",
      loves:false,
      added:false,
      hidd_description:true,
      image:"assets/imgs/bg-sobremesas.jpg"
    },
    {
      name:"Produit 3",
      price:"€ 20",
      description:"Ad dolor amet mollit culpa dolore mollit nisi est cillum anim do irure incididunt sint ut excepteur ea in ut.",
      loves:false,
      added:false,
      hidd_description:true,
      image:"assets/imgs/bg-sucos.jpg"
    },
    {
      name:"Produit 4",
      price:"$ 45",
      description:"Ad dolor amet mollit culpa dolore mollit nisi est cillum anim do irure incididunt sint ut excepteur ea in ut.",
      loves:false,
      added:false,
      hidd_description:true,
      image:"assets/imgs/bg-lanches.jpg"
    },
    {
      name:"Produit 5",
      price:"€ 30",
      description:"Ad dolor amet mollit culpa dolore mollit nisi est cillum anim do irure incididunt sint ut excepteur ea in ut.",
      loves:false,
      added:false,
      hidd_description:true,
      image:"assets/imgs/bg-sobremesas.jpg"
    },
    {
      name:"Produit 6",
      price:"€ 20",
      description:"Ad dolor amet mollit culpa dolore mollit nisi est cillum anim do irure incididunt sint ut excepteur ea in ut.",
      loves:false,
      added:false,
      hidd_description:true,
      image:"assets/imgs/bg-sucos.jpg"
    },
  ]

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
