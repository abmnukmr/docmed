import {Component, NgZone, ViewChild} from '@angular/core';
import {AlertController, Content, NavController, NavParams} from 'ionic-angular';
import {DoctersprofPage} from "../doctersprof/doctersprof";
import {Http} from "@angular/http";
import {LocationProvider} from "../../providers/location/location";

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
  getemail:any;
  @ViewChild(Content) content: Content;


  constructor(public navCtrl: NavController, public navParams: NavParams,public http: Http,public Loc:LocationProvider,public zone:NgZone,public alertCtrl: AlertController) {



    console.log("Abhimnayu");

    this.load(this.getemail);
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

        this.http.get('https://quiet-ridge-46090.herokuapp.com/chemist/list').map(res => res.json()).subscribe(data => {


          resolve(this.data);
          console.log(this.data)

        });

      });
    }

    return new Promise(resolve => {

      this.http.get('https://quiet-ridge-46090.herokuapp.com/chemist/list').map(res => res.json()).subscribe(data => {





        resolve(this.data);
        console.log(this.data)
      });

    });



  }


}



