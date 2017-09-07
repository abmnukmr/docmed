import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {PathoprofPage} from "../pathoprof/pathoprof";

/**
 * Generated class for the PathalogyPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-pathalogy',
  templateUrl: 'pathalogy.html',
})
export class PathalogyPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PathalogyPage');
  }
  gotoprof(){
    this.navCtrl.push(PathoprofPage);
  }

}
