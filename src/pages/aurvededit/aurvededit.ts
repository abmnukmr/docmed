import { Component } from '@angular/core';
import {IonicPage, ModalController, NavController, NavParams, ViewController} from 'ionic-angular';

/**
 * Generated class for the AurvededitPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-aurvededit',
  templateUrl: 'aurvededit.html',
})
export class AurvededitPage {

  constructor(public vctrl:ViewController,public navCtrl: NavController, public navParams: NavParams, public mdl:ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AurvededitPage');
  }

  cnal(){
    this.vctrl.dismiss();
 }

}
