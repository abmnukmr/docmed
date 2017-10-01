import { Component } from '@angular/core';
import {IonicPage, LoadingController, NavController, NavParams, ViewController} from 'ionic-angular';
import {Http} from "@angular/http";
import {LocationProvider} from "../../providers/location/location";

/**
 * Generated class for the ChemisteditPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-chemistedit',
  templateUrl: 'chemistedit.html',
})
export class ChemisteditPage {
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
    console.log('ionViewDidLoad ChemisteditPage');
  }
  cnal(){
    this.navCtrl.pop();
  }
}
