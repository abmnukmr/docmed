import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';

/**
 * Generated class for the ChemisteditPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-chemistedit',
  templateUrl: 'chemistedit.html',
})
export class ChemisteditPage {

  constructor( public vctrl:ViewController,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChemisteditPage');
  }
  cnal(){
    this.vctrl.dismiss();
  }
}
