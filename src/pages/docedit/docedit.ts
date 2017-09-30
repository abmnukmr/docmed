import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';

/**
 * Generated class for the DoceditPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-docedit',
  templateUrl: 'docedit.html',
})
export class DoceditPage {
 items:any;
  constructor(public vctrl:ViewController,public navCtrl: NavController, public navParams: NavParams) {
    this.initializeItems();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DocterPage');
  }

  initializeItems() {
    this.items = [
      "General physician",

      "ENT(Eye, nose ,throat)",

      "Dermatologist",

      "Dentist",

      "Diabetes",

      "Ophthalmology",

      "Hair fall",

      "Pediatrics",

      "Sexologist",

      "Depression",

      "Pregnancy",

      "Gynaecology & obstetrics",

      "Infertility",

      "Nutritionist /Dietitian",

      "Gastroenterology",

      "Cardiologist",

      "Nephrology",

      "Neurologist",

      "allergist",

      "Geriatrics",

      "Podiatry",

      "Herpetologist",

      "Haematologist",

      "Immunologist",

      "Oncologist",

      "Orthologist",

      "psychologist",

      "Psychiatrist",

      "Anaesthesiologists",

      "Urologist",

      "Radiologist",

      "Surgeon",

      "Plastic surgeon",

      "Radiologist",
      "Pet vetnary"
    ];
  }
  cnal(){
    this.vctrl.dismiss();
  }
}
