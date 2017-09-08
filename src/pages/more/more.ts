import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {DocterselfprofPage} from "../docterselfprof/docterselfprof";
import {HospitalselfprofPage} from "../hospitalselfprof/hospitalselfprof";
import {ChemistselfprofPage} from "../chemistselfprof/chemistselfprof";
import {PathalogyselfprofPage} from "../pathalogyselfprof/pathalogyselfprof";
import {AyurvedaselfprofPage} from "../ayurvedaselfprof/ayurvedaselfprof";
import {DoceditPage} from "../docedit/docedit";
import {ChemisteditPage} from "../chemistedit/chemistedit";
import {HospieditPage} from "../hospiedit/hospiedit";
import {AurvededitPage} from "../aurvededit/aurvededit";
import {PatheditPage} from "../pathedit/pathedit";
import {AdddoctorPage} from "../adddoctor/adddoctor";
import {AddchemistPage} from "../addchemist/addchemist";
import {AddhospitalPage} from "../addhospital/addhospital";
import {AddayurvedaPage} from "../addayurveda/addayurveda";
import {AddpathaPage} from "../addpatha/addpatha";

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



   adddoc(){
     this.navCtrl.push(AdddoctorPage);

   }

   addchem(){
     this.navCtrl.push(AddchemistPage);
   }

   addhospi(){
     this.navCtrl.push(AddhospitalPage);
   }

   addayu(){
     this.navCtrl.push(AddayurvedaPage);
   }

   addpatha(){
     this.navCtrl.push(AddpathaPage);
   }

}
