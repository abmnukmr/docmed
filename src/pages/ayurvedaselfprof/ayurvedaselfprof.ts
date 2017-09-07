import {Component, NgZone, ViewChild} from '@angular/core';
import {AlertController, Content, IonicPage, NavController, NavParams} from 'ionic-angular';

/**
 * Generated class for the AyurvedaselfprofPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-ayurvedaselfprof',
  templateUrl: 'ayurvedaselfprof.html',
})
export class AyurvedaselfprofPage {
  get content(): Content {
    return this._content;
  }

  set content(value: Content) {
    this._content = value;
  }


  @ViewChild(Content) private _content: Content;
  showheader: boolean = true;

  constructor(public navCtrl: NavController,public alertCtrl:AlertController ,public navParams: NavParams, public zone: NgZone) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChemistprofPage');
  }


  ngAfterViewInit() {
    this.zone.run(() => {

      this._content.ionScroll.subscribe(($event: any) => {
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

  showCheckbox() {
    let prompt = this.alertCtrl.create({
      title: 'Delivery Confirmation',
      message: "",
      inputs: [
        {
          name: 'Email',
          placeholder: 'Email',
        },
        {
          name: 'orderId',
          placeholder: 'orderId',
        },

      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Delivered',
          handler: data => {
            console.log('Saved clicked');
          }
        }
      ]
    });
    prompt.present();
  }







  popchem(){
    this.navCtrl.pop();
  }
}
