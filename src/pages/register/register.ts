import { Component } from '@angular/core';
import {LoadingController, NavController, NavParams} from 'ionic-angular';
import {GoogleloginPage} from "../googlelogin/googlelogin";
import * as firebase from 'firebase';

/**
 * Generated class for the RegisterPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  fireAuth: any;
  tabBarElement: any;
  loader:any;
  password:string="";
  email1:any;
  emaill:string="";
  constructor(public navCtrl: NavController, public navParams: NavParams,public loadingCtrl: LoadingController) {


    this.loader = this.loadingCtrl.create({
      content: "Registration in process ",
   //   duration: 3000
    });

    this.fireAuth = firebase.auth();

    if (document.querySelector('.tabbar')) {
      this.tabBarElement = document.querySelector('.tabbar.show-tabbar');
    }

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
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


  gotto(email,password){
    if(this.emaill != "" && this.password!= "") {

      this.loader.present();

      this.fireAuth.createUserWithEmailAndPassword(email, password)
        .then((newUser) => {
          this.loader.dismiss()
          this.navCtrl.setRoot(GoogleloginPage, {"email": this.emaill});

        }).catch((err) => {
        this.loader.dismiss();

        alert(err);
      });
    }
  }



  getcan(){
    this.navCtrl.setRoot(GoogleloginPage);
  }

}
