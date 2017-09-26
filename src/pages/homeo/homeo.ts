import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HomeoprofPage} from "../homeoprof/homeoprof";

/**
 * Generated class for the HomeoPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-homeo',
  templateUrl: 'homeo.html',
})
export class HomeoPage {


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AyurvedalistPage');
  }
  goto(){
    this.navCtrl.push(HomeoprofPage);
  }

}
