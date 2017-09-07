import {Component, NgZone, ViewChild} from '@angular/core';
import {Content, IonicPage, ModalController, NavController, NavParams} from 'ionic-angular';
import {PatheditPage} from "../pathedit/pathedit";

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
  showheader:boolean=true;
  @ViewChild(Content) content: Content;
  constructor(public Mdl:ModalController,public navCtrl: NavController, public navParams: NavParams, public zone:NgZone) {
    //this.detescroll();

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



  gotoedit(){
    let er=this.Mdl.create(PatheditPage)
    er.present()
  }
}
