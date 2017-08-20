import {Component, NgZone, ViewChild} from '@angular/core';
import {AlertController, Content, NavController, NavParams} from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  showheader: boolean = true;
  @ViewChild(Content) content: Content;

  constructor(public navCtrl: NavController, public navParams: NavParams, public zone: NgZone,public alertCtrl: AlertController) {
    //this.detescroll();

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DoctrrPage');
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






}
