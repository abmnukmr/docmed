import {Component, NgZone, ViewChild} from '@angular/core';
import {AlertController, Content, IonicPage, ModalController, NavController, NavParams} from 'ionic-angular';
import {AurvededitPage} from "../aurvededit/aurvededit";
import {HomeoeditPage} from "../homeoedit/homeoedit";

/**
 * Generated class for the HomeroselfPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-homeroself',
  templateUrl: 'homeroself.html',
})
export class HomeroselfPage {

  get content(): Content {
    return this._content;
  }

  set content(value: Content) {
    this._content = value;
  }


  @ViewChild(Content) private _content: Content;
  showheader: boolean = true;

  constructor(public mdl:ModalController,public navCtrl: NavController,public alertCtrl:AlertController ,public navParams: NavParams, public zone: NgZone) {
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





  mode(){
    let modal = this.mdl.create(HomeoeditPage)
    modal.present()
  }


  popchem(){
    this.navCtrl.pop();
  }
}
