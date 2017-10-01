import { Component } from '@angular/core';
import {IonicPage, LoadingController, NavController, NavParams, ViewController} from 'ionic-angular';
import {Http, RequestOptions,Headers} from "@angular/http";
import {LocationProvider} from "../../providers/location/location";
import * as firebase from 'firebase';

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
  url:any="https://quiet-ridge-46090.herokuapp.com/";
  name:any;
  experience:any;
  update:any;
  fee:any;
  lic:any;
  Specialize:any;
  address:any;
  location:any;
  phoneNo:any;
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
  loading:any;
  constructor(public http:Http,public Loc:LocationProvider,public navCtrl: NavController, public navParams: NavParams,public loadingCtrl:LoadingController) {
    this.location=this.Loc.lng+ ","+this.Loc.lng;
    this.loading = this.loadingCtrl.create({
      content:"wait..."
    });


    this.initializeItems();

    this.name=this.navParams.get("name");
    this.experience=this.navParams.get( "experience")
    this.fee=this.navParams.get("fee")
    this.lic=this.navParams.get("lic"),
      this.Specialize=this.navParams.get("Specialize")
    this.address=this.navParams.get("address")
    this.phoneNo=this.navParams.get("phoneNo")
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
      "email": this.email1,
      "exper":this.experience,
      "fee": this.fee,
      "lic_no": this.lic,
      "spl": this.Specialize,
      "address":this.address,
      "lat":this.Loc.lat,
      "lng":this.Loc.lng,
      "phone":this.phoneNo,
      "sun_time":this.sundaytime,
      "mon_time":this.Mondaytime,
      "tue_time": this.Thrusdaytime,
      "wed_time":this.Wednesdaytime,
      "thu_time":this.Thrusdaytime,
      "fri_time": this.Fridaytime,
      "sat_time":this.Saturdaytime,
      "services":this.services
    }
    console.log("updated start");
    var headers = new Headers();
    headers.append('content-type', 'application/json;charset=UTF-8');
    headers.append('Access-Control-Allow-Origin', '*');
    let options = new RequestOptions({headers:headers});

    this.http.post("https://quiet-ridge-46090.herokuapp.com/update/doctor/" + this.email1, JSON.stringify(this.update), options)
      .map(res => res.json()).subscribe(data => {
      console.log(data)
      this.loading.dismiss();
      this.cnal();
      //this.navCtrl.push(WalletPage);
    }, err => {
      console.log("Error!:", err);
      this.loading.dismiss();
    });

    this.loading.dismiss();
    this.cnal();


  }

  cnal(){
    this.navCtrl.pop();
  }
}
