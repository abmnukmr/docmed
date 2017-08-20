import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ChemistprofPage} from "../chemistprof/chemistprof";

/**
 * Generated class for the ChemistPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chemist',
  templateUrl: 'chemist.html',
})
export class ChemistPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChemistPage');
  }
   gotochemist(){
    this.navCtrl.push(ChemistprofPage);
   }

}
