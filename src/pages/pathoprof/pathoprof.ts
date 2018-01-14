import {Component, NgZone, ViewChild} from '@angular/core';
import {Content, IonicPage, NavController, NavParams} from 'ionic-angular';
import {PathalogyPage} from "../pathalogy/pathalogy";
import {Http} from "@angular/http";
import {LaunchNavigator} from "@ionic-native/launch-navigator";

/**
 * Generated class for the PathoprofPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-pathoprof',
  templateUrl: 'pathoprof.html',
})
export class PathoprofPage {
  showheader:boolean=true;
  data:any;
  @ViewChild(Content) content: Content;
  constructor(public nevigator:LaunchNavigator,public http:Http,public navCtrl: NavController, public navParams: NavParams, public zone:NgZone) {
    //this.detescroll();
  this.load(this.navParams.get("email"))
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DoctrrPage');
  }

  gob(){
    this.navCtrl.pop(PathalogyPage);
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
