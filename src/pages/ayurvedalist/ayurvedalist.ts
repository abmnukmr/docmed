import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AyurvedaprofPage} from "../ayurvedaprof/ayurvedaprof";

/**
 * Generated class for the AyurvedalistPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-ayurvedalist',
  templateUrl: 'ayurvedalist.html',
})
export class AyurvedalistPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AyurvedalistPage');
  }
  goto(){
    this.navCtrl.push(AyurvedaprofPage);
  }

}
