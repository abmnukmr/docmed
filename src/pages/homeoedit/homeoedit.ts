import { Component } from '@angular/core';
import {IonicPage, LoadingController, ModalController, NavController, NavParams, ViewController} from 'ionic-angular';
import {LocationProvider} from "../../providers/location/location";
import {Http, RequestOptions,Headers} from "@angular/http";
import * as firebase from 'firebase';

/**
 * Generated class for the HomeoeditPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-homeoedit',
  templateUrl: 'homeoedit.html',
})
export class HomeoeditPage {


  url:any="https://quiet-ridge-46090.herokuapp.com/";
  name:any;
  experience:any;
  update:any;
  fee:any;
  lic:any;
  Specialize:any;
  address:any;
  location:any;
  phone:any;
  sundaytime:any;
  Mondaytime:any;
  Tuesdaytime:any;
  Wednesdaytime:any;
  Thrusdaytime:any;
  Fridaytime:any;
  Saturdaytime:any;
  services:any;
  email1:any;
  items:any;
  DlNo:any;
  loading:any;
  constructor(public http:Http,public Loc:LocationProvider,public navCtrl: NavController, public navParams: NavParams,public loadingCtrl:LoadingController) {
    this.location=this.Loc.lng+ ","+this.Loc.lng;
    this.loading = this.loadingCtrl.create({
      content:"wait..."
    });




    this.name=this.navParams.get("name");
    this.experience=this.navParams.get( "experience")
    this.fee=this.navParams.get("fee")
    this.DlNo=this.navParams.get("lic"),
      this.Specialize=this.navParams.get("Specialize")
    this.address=this.navParams.get("address")
    this.phone=this.navParams.get("phoneNo")
    this.sundaytime=this.navParams.get("sundaytime")
    this.Mondaytime=this.navParams.get("Mondaytime")
    this.Tuesdaytime=this.navParams.get( "Tuesdaytime")
    this.Wednesdaytime=this.navParams.get("Wednesdaytime")
    this.Thrusdaytime=this.navParams.get("Thrusdaytime")
    this.Fridaytime=this.navParams.get("Fridaytime")
    this.Saturdaytime=this.navParams.get("Saturdaytime")
    this.services=this.navParams.get( "services")



  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad AurvededitPage');
  }

  cnal(){
    this.navCtrl.pop();
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

    this.http.post(this.url+"update/homeo/" + this.email1, JSON.stringify(this.update), options)
      .map(res => res.json()).subscribe(data => {
      console.log(data)
      this.loading.dismiss();
      this.cnal();
      //this.navCtrl.push(WalletPage);
    }, err => {
      console.log("Error!:");
      this.loading.dismiss();
    });

    this.loading.dismiss();
    this.cnal();


  }

}
