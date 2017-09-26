import { Component } from '@angular/core';
import {IonicPage, ModalController, NavController, NavParams, ViewController} from 'ionic-angular';

/**
 * Generated class for the HomeoeditPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-homeoedit',
  templateUrl: 'homeoedit.html',
})
export class HomeoeditPage {

  constructor(public vctrl:ViewController,public navCtrl: NavController, public navParams: NavParams, public mdl:ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AurvededitPage');
  }

  cnal(){
    this.vctrl.dismiss();
  }

}
