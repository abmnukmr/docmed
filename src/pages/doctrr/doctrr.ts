import {Component, NgZone, ViewChild} from '@angular/core';
import {AlertController, Content, NavController, NavParams} from 'ionic-angular';
import {DoctersprofPage} from "../doctersprof/doctersprof";

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
  @ViewChild(Content) content: Content;
  constructor(public navCtrl: NavController, public navParams: NavParams, public zone:NgZone,public alertCtrl: AlertController) {
    //this.detescroll();

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


}



