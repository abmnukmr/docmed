import {Component, NgZone} from '@angular/core';
import {IonicPage, LoadingController, NavController, NavParams} from 'ionic-angular';
import {TabsPage} from "../tabs/tabs";
import {LocationProvider} from "../../providers/location/location";
import { Geolocation } from '@ionic-native/geolocation';
import { Diagnostic } from '@ionic-native/diagnostic';
import {AuthenticationProvider} from "../../providers/authentication/authentication";
import {GooglePlus} from "@ionic-native/google-plus";
import * as firebase from 'firebase';
import {Observable} from "rxjs/Observable";
import {RegisterPage} from "../register/register";
import {ForgetPage} from "../forget/forget";
import {HomePage} from "../home/home";

/**
 * Generated class for the GoogleloginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-googlelogin',
  templateUrl: 'googlelogin.html',
})
export class GoogleloginPage {
  af: any;
  firebase: any;
  lati:any;
 lngi:any;
  passwordd:string="";
 email1:any;
 emaill:string="";
  tabBarElement: any;
email:any;
loader:any;

  constructor(public loadingCtrl: LoadingController,public Googleplus:GooglePlus,public _provider:AuthenticationProvider,public zone:NgZone,private diagnostic: Diagnostic,private geolocation: Geolocation,public navCtrl: NavController, public navParams: NavParams,public Loc:LocationProvider) {

    this.loader = this.loadingCtrl.create({
      content: "Login in process ",
    //  duration: 3000
    });


    this.getdat()
    if (document.querySelector('.tabbar')) {
      this.tabBarElement = document.querySelector('.tabbar.show-tabbar');
    }





    console.log(this.Loc.lat+" location" +this.Loc.lng);



  }

  getdat(){
    this.emaill=this.navParams.get("email");
  }


  gotocd()
  {
   this.navCtrl.setRoot(RegisterPage);

  }

  gotodf(){
    this.navCtrl.setRoot(ForgetPage)
  }



  ionViewWillEnter() {
    this.getdat()
    if (this.tabBarElement) {
      this.tabBarElement.style.display = 'none';
    }

  }

  ionViewWillLeave() {
    this.getdat()
    if (this.tabBarElement) {
      this.tabBarElement.style.display = 'flex';
    }

  }

  googlelog(){



       this.Googleplus.login({
          'webClientId' : '249434387922-cg0fjhl6c6uobrs2lup62s6fpp4sul0j.apps.googleusercontent.com'
        })
          .then((userData) => {

            console.log("userData " + JSON.stringify(userData));
            console.log("firebase " + firebase);
            var provider = firebase.auth.GoogleAuthProvider.credential(userData.idToken);

            firebase.auth().signInWithCredential(provider)
              .then((success) => {
                 this.navCtrl.setRoot(TabsPage);
                console.log("Firebase success: " + JSON.stringify(success));
               // alert(success)

              })
              .catch((error) => {
                console.log("Firebase failure: " + JSON.stringify(error));
                //alert(error)
              });

          })
          .catch((gplusErr) => {
            console.log("GooglePlus failure: " + JSON.stringify(gplusErr));
            alert("GooglePlus failure:"+gplusErr)
           });


  }





  ionViewDidLoad() {
    console.log('ionViewDidLoad GoogleloginPage');
  }



  login(email,pass){
    if(this.emaill != "" && this.passwordd != ""){
    this.loader.present();
    firebase.auth().signInWithEmailAndPassword(email, pass).then((user)=>{
      this.loader.dismiss();
      this.navCtrl.setRoot(TabsPage)
    }).catch((err)=>{
      this.loader.dismiss();

      alert(err)
    });
    }
  }

  zonechek(){
    this.zone.run(()=>{
      setInterval(()=>{

        console.log("ksjdbnkjwbfjsk");
      },10)
    })
  }


  goto(){
    this.navCtrl.push(TabsPage);
  }

}
