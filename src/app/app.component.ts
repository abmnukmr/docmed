import { Component } from '@angular/core';
import {App, NavController, Platform} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Diagnostic } from '@ionic-native/diagnostic';
import * as firebase from 'firebase';

import { TabsPage } from '../pages/tabs/tabs';
import {GoogleloginPage} from "../pages/googlelogin/googlelogin";
import {OpenNativeSettings} from "@ionic-native/open-native-settings";
import {LocationAccuracy} from "@ionic-native/location-accuracy";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
 rootPage:any=TabsPage;
 tgroot:any;
 tbroot:any;
  constructor(public appCtrl: App,private locationAccuracy: LocationAccuracy, private diagnostic: Diagnostic, platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {








      this.diagnostic.isLocationEnabled().then(
        (isAvailable) => {




          if (isAvailable === false) {
            //this.locationAccuracy.request(this.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY)
           this.diagnostic.switchToLocationSettings();
           }

          console.log('Is available? ' + isAvailable);
          //alert('Is available? ' + isAvailable);
        }).catch((e) => {
      });

/*
  */
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  setRoot(newRootPage: any){
    this.rootPage = newRootPage;
  }














}
