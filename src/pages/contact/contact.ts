import {Component, NgZone, ViewChild} from '@angular/core';
import {AlertController, Content, NavController, NavParams} from 'ionic-angular';
import * as firebase from 'firebase';
import {GoogleloginPage} from "../googlelogin/googlelogin";

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  email:any;
  showheader: boolean = true;
  @ViewChild(Content) content: Content;
  public fireAuth: any;
  public userData: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public zone: NgZone,public alertCtrl: AlertController) {
    //this.detescroll();
    this.fireAuth = firebase.auth();
    var user = firebase.auth().currentUser;
    if (user != null) {
      this.email = user.email;

    }


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DoctrrPage');
  }


  ngAfterViewInit() {
    this.zone.run(() => {

      this.content.ionScroll.subscribe(($event: any) => {
        let scrollTop: number = $event.scrollTop;
        console.log(scrollTop);

        if (scrollTop > 100) {
          setTimeout(() => {
            this.showheader = false;
          })

        }
        if (scrollTop < 100) {
          setTimeout(() => {
            this.showheader = true;
          })

        }


      });
    });
  }


   logout(){
     this.fireAuth.signOut();
     this.navCtrl.setRoot(GoogleloginPage);

   }





}
