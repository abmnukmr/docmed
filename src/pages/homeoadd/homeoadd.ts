import { Component } from '@angular/core';
import {IonicPage, LoadingController, NavController, NavParams} from 'ionic-angular';
import {Http, RequestOptions,Headers} from "@angular/http";
import {LocationProvider} from "../../providers/location/location";
import * as firebase from 'firebase';

/**
 * Generated class for the HomeoaddPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-homeoadd',
  templateUrl: 'homeoadd.html',
})
export class HomeoaddPage {
  url:any="https://quiet-ridge-46090.herokuapp.com";

  loading:any;
  name:any;
  address:any;
  update:any;
  phone:any;
  DlNo:any;
  location:any;
  email1:any;
  constructor(public http:Http,public Loc:LocationProvider,public navCtrl: NavController, public navParams: NavParams,public loadingCtrl:LoadingController) {
    this.location=this.Loc.lat+","+this.Loc.lng;
    this.loading = this.loadingCtrl.create({
      content:"wait..."
    });

  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad AddayurvedaPage');
  }

  cnal(){
    this.navCtrl.pop()
  }


  updatedata() {
    this.loading.present();
    var user = firebase.auth().currentUser;
    if (user != null) {
      var name = user.displayName;
      this.email1 = user.email;
      var photoUrl = user.photoURL;
    }

    this.update = {

      "name":this.name,
      "email":this.email1,
      "address":this.address,
      "lat":this.Loc.lat,
      "lng":this.Loc.lng,
      "phone":this.phone,
      "dl_no":this.DlNo
    }
    console.log("updated start");
    var headers = new Headers();
    headers.append('content-type', 'application/json;charset=UTF-8');
    headers.append('Access-Control-Allow-Origin', '*');
    let options = new RequestOptions({headers:headers});

    this.http.post(this.url+"/add/ayurveda/" + this.email1, JSON.stringify(this.update), options)
      .map(res => res.json()).subscribe(data => {
      console.log(data)
      this.loading.dismiss();
      this.cnal();
      //this.navCtrl.push(WalletPage);
    }, err => {
      console.log("Error!:", err.json());
      this.loading.dismiss();
    });

    this.loading.dismiss();
    this.cnal();


  }

}
