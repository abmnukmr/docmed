import {EventEmitter, Inject, Injectable} from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from "rxjs/Observable";
import * as firebase from 'firebase';

import {FirebaseApp,FirebaseAppConfigToken, AngularFireModule} from "angularfire2";
import {Platform} from "ionic-angular";

//import { AngularFireAuth } from 'angularfire2/auth';
import {GooglePlus} from "@ionic-native/google-plus";
/*
  Generated class for the AuthenticationProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class AuthenticationProvider {

  public firebase : any;

  userProfile: any = null;
  constructor( @Inject(FirebaseApp)firebase: any, public platform :Platform,public GooglePlus:GooglePlus) {



    this.firebase = firebase;
    console.log('Hello AuthenticationProvider Provider');


  }







}
