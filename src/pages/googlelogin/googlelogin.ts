import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {TabsPage} from "../tabs/tabs";

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GoogleloginPage');
  }


  goto(){
    this.navCtrl.push(TabsPage);
  }

}
