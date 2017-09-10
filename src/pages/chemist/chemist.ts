import {Component, NgZone} from '@angular/core';
import {AlertController, NavController, NavParams} from 'ionic-angular';
import {ChemistprofPage} from "../chemistprof/chemistprof";
import { Geolocation } from '@ionic-native/geolocation';
import {LocationProvider} from "../../providers/location/location";

/**
 * Generated class for the ChemistPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-chemist',
  templateUrl: 'chemist.html',
})
export class ChemistPage {

  lati:any;
  lngi:any;

  constructor(public zone:NgZone,public Loc:LocationProvider,public navCtrl: NavController, public navParams: NavParams,public alertCtrl:AlertController,private geolocation: Geolocation) {


this.lati=this.Loc.lat;
this.lati=this.Loc.lng

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChemistPage');
  }
   gotochemist(){
    this.navCtrl.push(ChemistprofPage);
   }

  showCheckbox() {
    let prompt = this.alertCtrl.create({
      title: 'Delivery Confirmation',
      message: "",
      inputs: [
        {
          name: 'Email',
          placeholder: 'Email',
        },
        {
          name: 'orderId',
          placeholder: 'orderId',
        },

      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Delivered',
          handler: data => {
            console.log('Saved clicked');
          }
        }
      ]
    });
    prompt.present();
  }


}
