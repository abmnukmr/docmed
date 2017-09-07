import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {DocterselfprofPage} from "../docterselfprof/docterselfprof";
import {HospitalselfprofPage} from "../hospitalselfprof/hospitalselfprof";
import {ChemistselfprofPage} from "../chemistselfprof/chemistselfprof";
import {PathalogyselfprofPage} from "../pathalogyselfprof/pathalogyselfprof";
import {AyurvedaselfprofPage} from "../ayurvedaselfprof/ayurvedaselfprof";

/**
 * Generated class for the MorePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-more',
  templateUrl: 'more.html',
})
export class MorePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MorePage');
  }

  doclog(){
    this.navCtrl.push(DocterselfprofPage);
  }

  hospilog(){
    this.navCtrl.push(HospitalselfprofPage);
  }

  chemlog(){
    this.navCtrl.push(ChemistselfprofPage);
  }

  pathalog(){
    this.navCtrl.push(PathalogyselfprofPage)
  }

   Aurlog(){
    this.navCtrl.push(AyurvedaselfprofPage);
   }



}
