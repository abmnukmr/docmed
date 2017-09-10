import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {TabsPage} from "../tabs/tabs";
import {LocationProvider} from "../../providers/location/location";
import { Geolocation } from '@ionic-native/geolocation';
import { Diagnostic } from '@ionic-native/diagnostic';

/**
 * Generated class for the GoogleloginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-googlelogin',
  templateUrl: 'googlelogin.html',
})
export class GoogleloginPage {
 lati:any;
 lngi:any;
  constructor(private diagnostic: Diagnostic,private geolocation: Geolocation,public navCtrl: NavController, public navParams: NavParams,public Loc:LocationProvider) {







    console.log(this.Loc.lat+" location" +this.Loc.lng);



  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GoogleloginPage');
  }


  goto(){
    this.navCtrl.push(TabsPage);
  }

}
