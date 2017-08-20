import {Component, ViewChild} from '@angular/core';
import {Content, IonicPage, NavController, NavParams} from 'ionic-angular';
import {DoctrrPage} from "../doctrr/doctrr";

/**
 * Generated class for the DoctersprofPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-doctersprof',
  templateUrl: 'doctersprof.html',
})
export class DoctersprofPage {

  @ViewChild(Content)
  content:Content;
  scr:any;
  // Necessary for the change() method below

  constructor(public navCtrl: NavController, public navParams: NavParams) {
      }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DoctersprofPage');
  }


  ngAfterViewInit() {
    this.content.ionScrollEnd.subscribe((data)=>{
      //... do things
    });
  }
  gotodocprof(){
    this.navCtrl.push(DoctrrPage);
  }

  Scrolltop(){
    setTimeout(()=>{

    },200)

  }

}
