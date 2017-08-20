import {Component, NgZone, ViewChild} from '@angular/core';
import {Content, IonicPage, NavController, NavParams} from 'ionic-angular';
import {ChemistPage} from "../chemist/chemist";

/**
 * Generated class for the ChemistprofPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chemistprof',
  templateUrl: 'chemistprof.html',
})
export class ChemistprofPage {

  @ViewChild(Content) content: Content;
   showheader:boolean=true;
  constructor(public navCtrl: NavController, public navParams: NavParams,public zone:NgZone) {
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
    this.navCtrl.pop(ChemistPage);
  }
}
