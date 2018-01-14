import {Component, NgZone, ViewChild} from '@angular/core';
import {AlertController, Content, NavController, NavParams} from 'ionic-angular';
import {DoctersprofPage} from "../doctersprof/doctersprof";
import {Http} from "@angular/http";
import {LocationProvider} from "../../providers/location/location";
import {LaunchNavigator} from "@ionic-native/launch-navigator";

/**
 * Generated class for the DoctrrPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-doctrr',
  templateUrl: 'doctrr.html',
})
export class DoctrrPage {
  showheader:boolean=true;
  shovaL:any;
  data:any;
  emilsearch:any
  getemail:any;
  @ViewChild(Content) content: Content;


  constructor(public nevigator:LaunchNavigator,public navCtrl: NavController, public navParams: NavParams,public http: Http,public Loc:LocationProvider,public zone:NgZone,public alertCtrl: AlertController) {

  this.emilsearch=navParams.get("email");

    console.log(this.emilsearch);

    this.load(this.emilsearch);
  }



  nevigate(lat,lng,name){

    //31.7104269,76.5258813
    this.nevigator.navigate([lat, lng], {
      // start: 'this.lati,this.lngi'

      destinationName:name
    });
  }


  getdata(){
    this.shovaL=this.navParams.get("email")
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DoctrrPage');
  }

  gob(){
    this.navCtrl.pop(DoctersprofPage);
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

        this.http.get('https://quiet-ridge-46090.herokuapp.com/be/doctor/'+em).map(res => res.json()).subscribe(data => {
          this.data = data
          resolve(this.data);
          // this.chemist=data
          console.log(this.data)
        });

      });
    }

    return new Promise(resolve => {

      this.http.get('https://quiet-ridge-46090.herokuapp.com/be/doctor/'+em).map(res => res.json()).subscribe(data => {

        this.data = data
        resolve(this.data);
        // this.chemist=data;
        console.log(this.data)

      });

    });



  }

}



