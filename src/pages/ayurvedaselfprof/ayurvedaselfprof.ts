import {Component, NgZone, ViewChild} from '@angular/core';
import {AlertController, Content, IonicPage, ModalController, NavController, NavParams} from 'ionic-angular';
import {AurvededitPage} from "../aurvededit/aurvededit";
import {Http} from "@angular/http";
import *as firebase from 'firebase'
import {MorePage} from "../more/more";
/**
 * Generated class for the AyurvedaselfprofPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-ayurvedaselfprof',
  templateUrl: 'ayurvedaselfprof.html',
})
export class AyurvedaselfprofPage {
  showheader: boolean = true;
  data:any;
  emailsearch:any;
  @ViewChild(Content) content: Content;

  constructor(public http:Http,public Mdl:ModalController,public navCtrl: NavController, public navParams: NavParams, public zone: NgZone, public alertCtrl: AlertController) {
    //this.detescroll();
    this.load();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DoctrrPage');
  }

  gob() {
    this.navCtrl.pop();
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
  gotoedit(nm,ex,fee,lic,spl,add,phn,sunt,mont,tut,wedt,thut,frdt,satt,ser ){
    let er=this.Mdl.create(AurvededitPage,{ "name":nm,
    "experience":ex,
    "fee":fee,
    "lic":lic,
    "Specialize":spl,
    "address":add,
    "phoneNo":phn,
    "sundaytime":sunt,
    "Mondaytime":mont,
    "Tuesdaytime":tut,
    "Wednesdaytime":wedt,
    "Thrusdaytime":thut,
    "Fridaytime":frdt,
    "Saturdaytime":satt,
    "services":ser
  })
    er.present()
  }


  load()
  {

    var user = firebase.auth().currentUser;
    if (user != null) {
      var  name = user.displayName;
      this.emailsearch = user.email;
      var  photoUrl = user.photoURL;
    }


    if(this.data) {

      return new Promise(resolve => {

        this.http.get('https://quiet-ridge-46090.herokuapp.com/be/ayurveda/'+this.emailsearch).map(res => res.json()).subscribe(data => {
          this.data = data
          resolve(this.data);
          // this.chemist=data
          console.log(this.data)
        });

      });
    }

    return new Promise(resolve => {

      this.http.get('https://quiet-ridge-46090.herokuapp.com/be/ayurveda/'+this.emailsearch).map(res => res.json()).subscribe(data => {

        this.data = data
        resolve(this.data);
        // this.chemist=data;
        console.log(this.data)

      });

    });



  }


}
