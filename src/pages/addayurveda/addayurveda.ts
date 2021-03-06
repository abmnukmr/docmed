import { Component } from '@angular/core';
import {IonicPage, LoadingController, NavController, NavParams} from 'ionic-angular';
import * as firebase from 'firebase';
import {Http, RequestOptions,Headers} from "@angular/http";
import {LocationProvider} from "../../providers/location/location";

/**
 * Generated class for the AddayurvedaPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-addayurveda',
  templateUrl: 'addayurveda.html',
})
export class AddayurvedaPage {
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

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdddoctorPage');
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
    if (this.name == "" || this.experience == "" || this.email1 == "" || this.fee == "" || this.lic == "" || this.address == "" || this.phoneNo == "" || this.sundaytime == "" || this.Mondaytime == "" || this.Tuesdaytime == "" || this.Wednesdaytime == "" || this.Fridaytime == "" || this.Saturdaytime == "" || this.services == "") {

      this.update = {
        "name": this.name,
        "email": this.email1,
        "exper": this.experience,
        "fee": this.fee,
        "lic_no": this.lic,
        "address": this.address,
        "lat": this.Loc.lat,
        "lng": this.Loc.lng,
        "phone": this.phoneNo,
        "sun_time": this.sundaytime,
        "mon_time": this.Mondaytime,
        "tue_time": this.Tuesdaytime,
        "wed_time": this.Wednesdaytime,
        "thu_time": this.Thrusdaytime,
        "fri_time": this.Fridaytime,
        "sat_time": this.Saturdaytime,
        "services": this.services
      }
      console.log("updated start");
      var headers = new Headers();
      headers.append('content-type', 'application/json;charset=UTF-8');
      headers.append('Access-Control-Allow-Origin', '*');
      let options = new RequestOptions({headers: headers});

      this.http.post("https://quiet-ridge-46090.herokuapp.com/add/ayurveda/" + this.email1, JSON.stringify(this.update), options)
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


    }else{
      alert("Fill the all details")
    }

  }
}
