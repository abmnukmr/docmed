import {Component, NgZone, ViewChild} from '@angular/core';
import {AlertController, Content, LoadingController, NavController, NavParams} from 'ionic-angular';
import {ChemistPage} from "../chemist/chemist";
import {OrderchemPage} from "../orderchem/orderchem";
import {Http, RequestOptions,Headers} from "@angular/http";
import * as firebase from 'firebase';
import {LaunchNavigator} from "@ionic-native/launch-navigator";

/**
 * Generated class for the ChemistprofPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-chemistprof',
  templateUrl: 'chemistprof.html',
})
export class ChemistprofPage {
 update:any;
  chemist:any;
  @ViewChild(Content) content: Content;
   showheader:boolean=true;
   data:any;
  // name:any;
  email1:any;
  loading:any;
   ch:any=[{"name":"sadjas"}]
   emailchem:any;
  constructor(public loadingCtrl:LoadingController,public nevigator:LaunchNavigator,public navCtrl: NavController, public http:Http,public navParams: NavParams,public zone:NgZone,public alertCtrl:AlertController) {


    this.loading = this.loadingCtrl.create({
      content:"wait..."
    });
    var user = firebase.auth().currentUser;
    if (user != null) {
      var name = user.displayName;
      this.email1 = user.email;
      var photoUrl = user.photoURL;
    }



    this.emailchem=navParams.get("email");
    this.load(this.emailchem);
     console.log(this.emailchem)
  }

  ionViewDidLoad() {
    //this.load(this.emailchem);


    console.log('ionViewDidLoad ChemistprofPage');
  }



  nevigate(lat,lng,name){

    //31.7104269,76.5258813
    this.nevigator.navigate([lat, lng], {
      // start: 'this.lati,this.lngi'

      destinationName:name
    });
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
    this.navCtrl.pop(ChemistPage);
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
            if(data.orderId==data.order_id &&data.Email==data.sender_id){
              this.cnf(data.orderId)
              console.log('Saved clicked');

            }
            else {
              alert("invalid details")
            }
          }
        }
      ]
    });
    prompt.present();
  }


order(){
    this.navCtrl.push(OrderchemPage)
}




  load(email)
  {

    if(this.data) {

      return new Promise(resolve => {

        this.http.get('https://quiet-ridge-46090.herokuapp.com/be/chemist/'+email).map(res => res.json()).subscribe(data => {
          this.data = data
          resolve(this.data);
         // this.chemist=data
         console.log(this.data)
        });

      });
    }

    return new Promise(resolve => {

      this.http.get('https://quiet-ridge-46090.herokuapp.com/be/chemist/'+email).map(res => res.json()).subscribe(data => {

        this.data = data
        resolve(this.data);
       // this.chemist=data;
        console.log(this.data)

      });

    });



  }






  cnf(de) {
    this.loading.present();
    var user = firebase.auth().currentUser;
    if (user != null) {
      var name = user.displayName;
      this.email1 = user.email;
      var photoUrl = user.photoURL;
    }

    this.update = {
      order_id:de
    }
    console.log("updated start");
    var headers = new Headers();
    headers.append('content-type', 'application/json;charset=UTF-8');
    headers.append('Access-Control-Allow-Origin', '*');
    let options = new RequestOptions({headers:headers});

    this.http.post("https://quiet-ridge-46090.herokuapp.com/chemist/cnf/" + this.email1, JSON.stringify(this.update), options)
      .map(res => res.json()).subscribe(data => {
      console.log(data)
      this.loading.dismiss();
      //this.navCtrl.push(WalletPage);
    }, err => {
      console.log("Error!:", err);
      this.loading.dismiss();
    });

    this.loading.dismiss();


  }

}
