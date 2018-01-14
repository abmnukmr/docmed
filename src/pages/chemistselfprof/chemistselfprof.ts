import {Component, NgZone, ViewChild} from '@angular/core';
import {AlertController, Content, IonicPage, ModalController, NavController, NavParams} from 'ionic-angular';
import {ChemisteditPage} from "../chemistedit/chemistedit";
import {Http, RequestOptions} from "@angular/http";
import * as firebase from 'firebase';
import {LaunchNavigator} from "@ionic-native/launch-navigator";

/**
 * Generated class for the ChemistselfprofPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-chemistselfprof',
  templateUrl: 'chemistselfprof.html',
})
export class ChemistselfprofPage {

  @ViewChild(Content) content: Content;
  showheader:boolean=true;
  data:any;
  email1:any;
  emailsearch:any;
  constructor(public loading:Lo,public nevigator:LaunchNavigator,public  http:Http,public Mdl:ModalController,public navCtrl: NavController, public navParams: NavParams,public zone:NgZone,public alertCtrl:AlertController) {

    this.load();
    var user = firebase.auth().currentUser;
    if (user != null) {
      var name = user.displayName;
      this.email1 = user.email;
      var photoUrl = user.photoURL;
    }
  }


  gotoedit(nm,ex,fee,lic,spl,add,phn,sunt,mont,tut,wedt,thut,frdt,satt,ser ){
    let er=this.Mdl.create(ChemisteditPage,{ "name":nm,
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
      this.load();

    });

    er.present()
  }



  nevigate(lat,lng,name){

    //31.7104269,76.5258813
    this.nevigator.navigate([lat, lng], {
      // start: 'this.lati,this.lngi'

      destinationName:name
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChemistprofPage');
  }


  ngAfterViewInit() {
    this.zone.run(() => {

      this.content.ionScroll.subscribe(($event: any) => {
        let scrollTop: number = $event.scrollTop;
        console.log(scrollTop);

        if(scrollTop >100 ){
          setTimeout(()=>{
            this.showheader=false;
          })

        }
        if(scrollTop<100) {
          setTimeout(()=>{
            this.showheader=true;
          })

        }



      });
    });
  }

  popchem(){
    this.navCtrl.pop();
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

        this.http.get('https://quiet-ridge-46090.herokuapp.com/be/chemist/'+this.emailsearch).map(res => res.json()).subscribe(data => {
          this.data = data
          resolve(this.data);
          // this.chemist=data
          console.log(this.data)
        });

      });
    }

    return new Promise(resolve => {

      this.http.get('https://quiet-ridge-46090.herokuapp.com/be/chemist/'+this.emailsearch).map(res => res.json()).subscribe(data => {

        this.data = data
        resolve(this.data);
        // this.chemist=data;
        console.log(this.data)

      });

    });



  }














  cnf(id,em) {
    this.loading.present();
    var user = firebase.auth().currentUser;
    if (user != null) {
      var name = user.displayName;
      this.email1 = user.email;
      var photoUrl = user.photoURL;
    }

    this.update = {

    }
    console.log("updated start");
    var headers = new Headers();
    headers.append('content-type', 'application/json;charset=UTF-8');
    headers.append('Access-Control-Allow-Origin', '*');
    let options = new RequestOptions({headers:headers});

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


  }











}
