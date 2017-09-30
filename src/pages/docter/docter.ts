import { Component } from '@angular/core';
import {NavController, NavParams } from 'ionic-angular';
import {DoctersprofPage} from "../doctersprof/doctersprof";

/**
 * Generated class for the DocterPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-docter',
  templateUrl: 'docter.html',
})
export class DocterPage {

  searchQuery: string = '';
  items: string[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
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
      "Prt vetnary"
  ];
  }

  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }


  gotoprof(e){
    this.navCtrl.push(DoctersprofPage,{"cata":e});
  }


}
