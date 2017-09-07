import {Component, NgZone, ViewChild} from '@angular/core';
import {AlertController, Content, IonicPage, ModalController, NavController, NavParams} from 'ionic-angular';
import {DoceditPage} from "../docedit/docedit";

/**
 * Generated class for the DocterselfprofPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-docterselfprof',
  templateUrl: 'docterselfprof.html',
})
export class DocterselfprofPage {
  showheader: boolean = true;
  @ViewChild(Content) content: Content;

  constructor(public Mdl:ModalController,public navCtrl: NavController, public navParams: NavParams, public zone: NgZone, public alertCtrl: AlertController) {
    //this.detescroll();

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DoctrrPage');
  }

  gob() {
    this.navCtrl.pop();
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
  gotoedit(){
    let er=this.Mdl.create(DoceditPage)
    er.present()
  }
}
