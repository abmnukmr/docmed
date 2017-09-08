import {Component, NgZone, ViewChild} from '@angular/core';
import {AlertController, Content, NavController, NavParams} from 'ionic-angular';
import {ChemistPage} from "../chemist/chemist";
import {OrderchemPage} from "../orderchem/orderchem";

/**
 * Generated class for the ChemistprofPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-chemistprof',
  templateUrl: 'chemistprof.html',
})
export class ChemistprofPage {

  @ViewChild(Content) content: Content;
   showheader:boolean=true;
  constructor(public navCtrl: NavController, public navParams: NavParams,public zone:NgZone,public alertCtrl:AlertController) {
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


order(){
    this.navCtrl.push(OrderchemPage)
}


}
