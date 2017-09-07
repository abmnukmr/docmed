import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {DocterPage} from "../docter/docter";
import {PathalogyPage} from "../pathalogy/pathalogy";
import {ChemistPage} from "../chemist/chemist";
import {HosptalListPage} from "../hosptal-list/hosptal-list";
import {AyurvedalistPage} from "../ayurvedalist/ayurvedalist";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  gotoDocter(){
    this.navCtrl.push(DocterPage);
  }

  gotopatha(){
    this.navCtrl.push(PathalogyPage);
  }
  gotochem(){
    this.navCtrl.push(ChemistPage);
  }

  gotohospi(){
    this.navCtrl.push(HosptalListPage);
  }
  gotoaur(){
    this.navCtrl.push(AyurvedalistPage);
  }
}
