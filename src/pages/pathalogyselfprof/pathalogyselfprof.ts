import {Component, NgZone, ViewChild} from '@angular/core';
import {Content, IonicPage, ModalController, NavController, NavParams} from 'ionic-angular';
import {PatheditPage} from "../pathedit/pathedit";
import {Http} from "@angular/http";
import *as firebase from  'firebase'
import {LaunchNavigator} from "@ionic-native/launch-navigator";

/**
 * Generated class for the PathalogyselfprofPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-pathalogyselfprof',
  templateUrl: 'pathalogyselfprof.html',
})
export class PathalogyselfprofPage {
 data:any;
 emailsearch:any;
  showheader:boolean=true;
  @ViewChild(Content) content: Content;
  constructor(public nevigator:LaunchNavigator,public http:Http,public Mdl:ModalController,public navCtrl: NavController, public navParams: NavParams, public zone:NgZone) {
    //this.detescroll();

    var user = firebase.auth().currentUser;
    if (user != null) {
      var  name = user.displayName;
      this.emailsearch = user.email;
      var  photoUrl = user.photoURL;
    }
    this.load(this.emailsearch);


  }


  gotoedit(nm,ex,fee,lic,spl,add,phn,sunt,mont,tut,wedt,thut,frdt,satt,ser ){
    let er=this.Mdl.create(PatheditPage,{ "name":nm,
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


  nevigate(lat,lng,name){

    //31.7104269,76.5258813
    this.nevigator.navigate([lat, lng], {
      // start: 'this.lati,this.lngi'

      destinationName:name
    });
  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad DoctrrPage');
  }

  gob(){
    this.navCtrl.pop();
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








  load(em)
  {



    if(this.data) {

      return new Promise(resolve => {

        this.http.get('https://quiet-ridge-46090.herokuapp.com/be/pathalogy/'+em).map(res => res.json()).subscribe(data => {
          this.data = data
          resolve(this.data);
          // this.chemist=data
          console.log(this.data)
        });

      });
    }

    return new Promise(resolve => {

      this.http.get('https://quiet-ridge-46090.herokuapp.com/be/pathalogy/'+em).map(res => res.json()).subscribe(data => {

        this.data = data
        resolve(this.data);
        // this.chemist=data;
        console.log(this.data)

      });

    });



  }

}
