import {Component, ViewChild} from '@angular/core';
import {Content,  NavController, NavParams} from 'ionic-angular';
import {DoctrrPage} from "../doctrr/doctrr";
import {Http} from "@angular/http";
import 'rxjs/add/operator/map';
import {Observable} from "rxjs";

import {LaunchNavigator} from "@ionic-native/launch-navigator";

import {LocationProvider} from "../../providers/location/location";

/**
 * Generated class for the DoctersprofPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-doctersprof',
  templateUrl: 'doctersprof.html',
})
export class DoctersprofPage {

  @ViewChild(Content)
  content:Content;
  scr:any;
  data:any;
  // Necessary for the change() method below
 shovaL:any;
  constructor(public nevigator:LaunchNavigator,public navCtrl: NavController, public navParams: NavParams,public http: Http,public Loc:LocationProvider) {

    this.shovaL=this.navParams.get("cata")


    console.log("Abhimnayu"+this.shovaL);

    this.load(this.Loc.lat,this.Loc.lng);
      }

  getdata(){
    this.shovaL=this.navParams.get("cata")
  }


  nevigate(lat,lng,name){

    //31.7104269,76.5258813
    this.nevigator.navigate([lat, lng], {
      // start: 'this.lati,this.lngi'

      destinationName:name
    });
  }
  ionViewDidLoad() {

    this.load(this.Loc.lat,this.Loc.lng);
    console.log('ionViewDidLoad DoctersprofPage');
  }




  ngAfterViewInit() {
    this.content.ionScrollEnd.subscribe((data)=>{
      //... do things
    });
  }
  gotodocprof(em){
    this.navCtrl.push(DoctrrPage,{"email":em});
  }

  Scrolltop(){
    setTimeout(()=>{

    },200)

  }


  load(lati,lngi)
  {

    if(this.data) {

      return new Promise(resolve => {

        this.http.get('https://quiet-ridge-46090.herokuapp.com/doctor/list').map(res => res.json()).subscribe(data => {

          this.data = this.applyHaversine(data,lati,lngi);

          this.data.sort((locationA, locationB) => {
            return locationA.distance - locationB.distance;
          });

          resolve(this.data);
          console.log(this.data)

        });

      });
    }

    return new Promise(resolve => {

      this.http.get('https://quiet-ridge-46090.herokuapp.com/doctor/list').map(res => res.json()).subscribe(data => {

        this.data = this.applyHaversine(data,lati,lngi);

        this.data.sort((locationA, locationB) => {
          return locationA.distance - locationB.distance;
        });

        resolve(this.data);
     console.log(this.data)
      });

    });



  }

  applyHaversine(locations,lati,lngi){

    let usersLocation = {
      lat:lati,
      lng: lngi
    };

    locations.map((location) => {

      let placeLocation = {
        lat: location.lat,
        lng: location.lng,
      };

      location.distance = this.getDistanceBetweenPoints(
        usersLocation,
        placeLocation,
        'km'
      ).toFixed(2);
    });

    return locations;
  }

  getDistanceBetweenPoints(start, end, units){

    let earthRadius = {
      miles: 3958.8,
      km: 6371
    };

    let R = earthRadius[units || 'km'];
    let lat1 = start.lat;
    let lon1 = start.lng;
    let lat2 = end.lat;
    let lon2 = end.lng;

    let dLat = this.toRad((lat2 - lat1));
    let dLon = this.toRad((lon2 - lon1));
    let a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(this.toRad(lat1)) * Math.cos(this.toRad(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
    let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    let d = R * c;

    return d;

  }

  toRad(x){
    return x * Math.PI / 180;

  }










}
