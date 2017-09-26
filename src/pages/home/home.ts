import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {DocterPage} from "../docter/docter";
import {PathalogyPage} from "../pathalogy/pathalogy";
import {ChemistPage} from "../chemist/chemist";
import {HosptalListPage} from "../hosptal-list/hosptal-list";
import {AyurvedalistPage} from "../ayurvedalist/ayurvedalist";
import {GoogleloginPage} from "../googlelogin/googlelogin";
import * as firebase from 'firebase';
import {TabsPage} from "../tabs/tabs";
import {LocationProvider} from "../../providers/location/location";
import {HomeoPage} from "../homeo/homeo";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  firebase: any;

  constructor(public navCtrl: NavController,public Loc:LocationProvider) {

    this.Loc.startTracking();
    firebase.auth().onAuthStateChanged(function(user) {
      if (!user) {
         navCtrl.setRoot(GoogleloginPage)
        // User is signed in.
      } else {


        // No user is signed in.
      }
    });



  }

  chekcrei(){


  }

  goto(){
    this.navCtrl.setRoot(GoogleloginPage);
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
  gotohom(){
    this.navCtrl.push(HomeoPage)
  }
}



