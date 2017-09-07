import {Component, NgZone, ViewChild} from '@angular/core';
import {Content, IonicPage, NavController, NavParams} from 'ionic-angular';

/**
 * Generated class for the AyurvedaprofPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-ayurvedaprof',
  templateUrl: 'ayurvedaprof.html',
})
export class AyurvedaprofPage {


  @ViewChild(Content) content: Content;
  showheader: boolean = true;

  constructor(public navCtrl: NavController, public navParams: NavParams, public zone: NgZone) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChemistprofPage');
  }


  ngAfterViewInit() {
    this.zone.run(() => {

      this.content.ionScroll.subscribe(($event: any) => {
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

  popchem(){
    this.navCtrl.pop();
  }
}
