import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import {HospitalprofPage} from "../hospitalprof/hospitalprof";

/**
 * Generated class for the HosptalListPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-hosptal-list',
  templateUrl: 'hosptal-list.html',
})
export class HosptalListPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HosptalListPage');
  }



  gotohospital(){
    this.navCtrl.push(HospitalprofPage);
  }
}
