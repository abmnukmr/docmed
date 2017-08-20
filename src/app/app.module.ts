import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {MorePageModule} from "../pages/more/more.module";
import {MorePage} from "../pages/more/more";
import {DocterPage} from "../pages/docter/docter";
import {ChemistPage} from "../pages/chemist/chemist";
import {PathalogyPage} from "../pages/pathalogy/pathalogy";
import {DoctersprofPage} from "../pages/doctersprof/doctersprof";
import {ShrinkHeader} from "../directives/shrink-header/shrink-header";
import {DoctrrPage} from "../pages/doctrr/doctrr";
import {ElasticHeader} from "../directives/elastic-header/elastic-header";
import {ChemistprofPage} from "../pages/chemistprof/chemistprof";
import {PathoprofPage} from "../pages/pathoprof/pathoprof";

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    MorePage,
    DocterPage,
    ShrinkHeader,
    DoctrrPage,
    ChemistPage,
    PathalogyPage,
    DoctersprofPage,
    ElasticHeader,
    ChemistprofPage,
    PathoprofPage

     ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    ChemistPage,
    PathalogyPage,
    TabsPage,
    MorePage,
    DocterPage,
    ChemistprofPage,
    DoctrrPage,
    DoctersprofPage,
    PathoprofPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
