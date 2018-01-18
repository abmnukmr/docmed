import {Component, NgZone, ViewChild} from '@angular/core';
import {AlertController, Content, LoadingController, NavController, NavParams} from 'ionic-angular';
import * as firebase from 'firebase';
import {GoogleloginPage} from "../googlelogin/googlelogin";
import { Storage } from '@ionic/storage';
import {Http, RequestOptions,Headers} from "@angular/http";

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  email:any;
  showheader: boolean = true;
  @ViewChild(Content) content: Content;
  public fireAuth: any;
  public userData: any;
  sex:any="not Specified"
  name:any;
  age:any=0;
  ed:boolean=true;
  valid:any;
  data:any;
  user:any;
  email1:any;
  loading:any;
  update:any;
  hdn:boolean=false;
  phone:any;
  constructor(public loadingCtrl:LoadingController,public http:Http,private sorage: Storage,public navCtrl: NavController, public navParams: NavParams, public zone: NgZone,public alertCtrl: AlertController) {
    //this.detescroll();

    this.loading = this.loadingCtrl.create({
      content:"wait..."
    });

    this.fireAuth = firebase.auth();
    var user = firebase.auth().currentUser;
    if (user != null) {
      this.email = user.email;

    }


    this.load();
   // this.getval()
  }

   save(){


       this.loading.present();
       var user = firebase.auth().currentUser;
       if (user != null) {
         var name = user.displayName;
         this.email1 = user.email;
         var photoUrl = user.photoURL;
       }

       this.update = {
         "name": this.name,
         "email":this.email,
         "age": this.age,
         "sex": this.sex,
         "phone":this.phone
       }
       console.log("updated start");
       var headers = new Headers();
       headers.append('content-type', 'application/json;charset=UTF-8');
       headers.append('Access-Control-Allow-Origin', '*');
       let options = new RequestOptions({headers:headers});

       this.http.post("https://quiet-ridge-46090.herokuapp.com/user/prof/update/" + this.email1, JSON.stringify(this.update), options)
         .map(res => res.json()).subscribe(data => {
         console.log(data)
         this.loading.dismiss();
         this.ed=true
         this.load();
         //this.navCtrl.push(WalletPage);
       }, err => {
         console.log("Error!:", err);
         this.loading.dismiss();
         this.load();
       });

       this.loading.dismiss();
     this.ed=true;
     this.load();



   }


  getval(){



    this.sorage.get('get').then((val) => {
      if(val!=null){
      console.log('Your age is', val);

        this.valid =JSON.parse( val);
        this.name=this.valid.name
      this.age=this.valid.age
      this.sex=this.valid.sex
      }
      else {
        alert("Save it first");

        this.ed=false;
      }
    });
  }




  Edit(){
    this.ed=false

  }



  load()
  {

    this.loading.present();

    var user = firebase.auth().currentUser;

    if (user != null) {
      var name = user.displayName;
      this.email1 = user.email;
      var photoUrl = user.photoURL;
    }

    if(this.data) {

      return new Promise(resolve => {

        this.http.get('https://quiet-ridge-46090.herokuapp.com/user/prof/find/'+this.email1).map(res => res.json()).subscribe(data => {
          this.data = data
          resolve(this.data);
          this.name=this.data.name;
          this.age=this.data.age;
          this.sex=this.data.sex;
          this.phone=this.data.phone;
          // this.chemist=data
          console.log(this.data)
          this.hdn=true;
         this.loading.dismissAll()
        });

      });
    }

    return new Promise(resolve => {

      this.http.get('https://quiet-ridge-46090.herokuapp.com/user/prof/find/'+this.email1).map(res => res.json()).subscribe(data => {

        this.data = data
        resolve(this.data);

        this.name=this.data.name;
        this.age=this.data.age;
        this.sex=this.data.sex;
        this.phone=this.data.phone;
        this.hdn=true;
        // this.chemist=data;
        console.log(this.data)

        this.loading.dismissAll()

      });

    });



  }


  // Or to get a key/value pair


  ionViewDidEnter() {
    this.load()
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


   logout(){
     this.fireAuth.signOut();
     this.navCtrl.setRoot(GoogleloginPage);

   }





}
