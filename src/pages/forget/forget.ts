import { Component } from '@angular/core';
import {IonicPage, LoadingController, NavController, NavParams} from 'ionic-angular';
import {GoogleloginPage} from "../googlelogin/googlelogin";
import * as firebase from 'firebase';

/**
 * Generated class for the ForgetPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-forget',
  templateUrl: 'forget.html',
})
export class ForgetPage {
  tabBarElement: any;
  passwordd:string="";
  email1:any;
  emaill:string="";
  loader:any;
  constructor(public loadingCtrl: LoadingController,public navCtrl: NavController, public navParams: NavParams) {
    this.loader = this.loadingCtrl.create({
      content: "Password reset in process ",
      //  duration: 3000
    });

    if (document.querySelector('.tabbar')) {
      this.tabBarElement = document.querySelector('.tabbar.show-tabbar');
    }

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ForgetPage');
  }

  ionViewWillEnter() {
    if (this.tabBarElement) {
      this.tabBarElement.style.display = 'none';
    }

  }

  ionViewWillLeave() {
    if (this.tabBarElement) {
      this.tabBarElement.style.display = 'none';
    }

  }

  getcan(){
    this.navCtrl.setRoot(GoogleloginPage);
  }





  gotolog(){
    if(this.emaill!=""){
      this.loader.present();
    firebase.auth().sendPasswordResetEmail(this.emaill).then((user)=>{
      this.loader.dismiss();
      this.navCtrl.setRoot(GoogleloginPage,{"email":this.emaill})
      alert("Password reset link send on"+ " "+this.emaill)

    }).catch((err)=>{
      this.loader.dismiss();
      alert(err)

    })
    }
      }

}
