import {Component, NgZone, ViewChild} from '@angular/core';
import {AlertController, Content, IonicPage, ModalController, NavController, NavParams} from 'ionic-angular';
import {AurvededitPage} from "../aurvededit/aurvededit";
import {HomeoeditPage} from "../homeoedit/homeoedit";
import {Http} from "@angular/http";
import  *as firebase from 'firebase'
import {LaunchNavigator} from "@ionic-native/launch-navigator";

/**
 * Generated class for the HomeroselfPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-homeroself',
  templateUrl: 'homeroself.html',
})
export class HomeroselfPage {
   data:any;
  get content(): Content {
    return this._content;
  }

  set content(value: Content) {
    this._content = value;
  }


  @ViewChild(Content) private _content: Content;
  showheader: boolean = true;
   emailsearch:any;
  constructor(public nevigator:LaunchNavigator,public Mdl:ModalController,public http:Http,public navCtrl: NavController,public alertCtrl:AlertController ,public navParams: NavParams, public zone: NgZone) {


    var user = firebase.auth().currentUser;
    if (user != null) {
      var  name = user.displayName;
      this.emailsearch = user.email;
      var  photoUrl = user.photoURL;
    }
    this.load(this.emailsearch);

  }



  nevigate(lat,lng,name){

    //31.7104269,76.5258813
    this.nevigator.navigate([lat, lng], {
      // start: 'this.lati,this.lngi'

      destinationName:name
    });
  }


  gotoedit(nm,ex,fee,lic,spl,add,phn,sunt,mont,tut,wedt,thut,frdt,satt,ser ){
    let er=this.Mdl.create(HomeoeditPage,{ "name":nm,
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
    er.onDidDismiss(data => {
      this.load(this.emailsearch);

    });

    er.present()
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad ChemistprofPage');
  }


  ngAfterViewInit() {
    this.zone.run(() => {

      this._content.ionScroll.subscribe(($event: any) => {
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

  showCheckbox() {
    let prompt = this.alertCtrl.create({
      title: 'Delivery Confirmation',
      message: "",
      inputs: [
        {
          name: 'Email',
          placeholder: 'Email',
        },
        {
          name: 'orderId',
          placeholder: 'orderId',
        },

      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Delivered',
          handler: data => {
            console.log('Saved clicked');
          }
        }
      ]
    });
    prompt.present();
  }









  load(em)
  {



    if(this.data) {

      return new Promise(resolve => {

        this.http.get('https://quiet-ridge-46090.herokuapp.com/be/homeo/'+em).map(res => res.json()).subscribe(data => {
          this.data = data
          resolve(this.data);
          // this.chemist=data
          console.log(this.data)
        });

      });
    }

    return new Promise(resolve => {

      this.http.get('https://quiet-ridge-46090.herokuapp.com/be/homeo/'+em).map(res => res.json()).subscribe(data => {

        this.data = data
        resolve(this.data);
        // this.chemist=data;
        console.log(this.data)

      });

    });



  }


  popchem(){
    this.navCtrl.pop();
  }
}
