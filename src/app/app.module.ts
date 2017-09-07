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
import {ExpandableHeader} from "../components/expandable-header/expandable-header";
import {DoctersPage} from "../pages/docters/docters";
import {UserprofEditPage} from "../pages/userprof-edit/userprof-edit";
import {DoctorPofPage} from "../pages/doctor-pof/doctor-pof";
import {HosptalListPage} from "../pages/hosptal-list/hosptal-list";
import {HospitalprofPage} from "../pages/hospitalprof/hospitalprof";
import {AyurvedalistPage} from "../pages/ayurvedalist/ayurvedalist";
import {AyurvedaprofPage} from "../pages/ayurvedaprof/ayurvedaprof";
import {AyurvedaselfprofPage} from "../pages/ayurvedaselfprof/ayurvedaselfprof";
import {DocterselfprofPage} from "../pages/docterselfprof/docterselfprof";
import {ChemistselfprofPage} from "../pages/chemistselfprof/chemistselfprof";
import {HospitalselfprofPage} from "../pages/hospitalselfprof/hospitalselfprof";
import {PathalogyselfprofPage} from "../pages/pathalogyselfprof/pathalogyselfprof";

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    MorePage,
    DoctrrPage,
    DoctorPofPage,
    DocterPage,
    ShrinkHeader,
    DoctrrPage,
    ChemistPage,
    PathalogyPage,
    DoctersprofPage,
    ElasticHeader,
    ChemistprofPage,
    ExpandableHeader,
    DoctersPage,
    HosptalListPage,
    PathoprofPage,
    UserprofEditPage,
    DoctorPofPage,
    HospitalprofPage,
    AyurvedalistPage,
    AyurvedaprofPage,
    AyurvedaselfprofPage,
    DocterselfprofPage,
    ChemistselfprofPage,
    HospitalselfprofPage,
    PathalogyselfprofPage


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
    PathalogyPage,
    TabsPage,
    MorePage,
    DocterPage,
    ChemistprofPage,
    DoctrrPage,
    DoctersprofPage,
    PathoprofPage,
    ExpandableHeader,
    DoctersPage,
    DoctersprofPage,
    PathoprofPage,
    UserprofEditPage,
    DoctorPofPage,
    DoctrrPage,
    HospitalprofPage,
    ChemistPage,
    HosptalListPage,
    AyurvedalistPage,
    AyurvedaprofPage,
    AyurvedaselfprofPage,
    DocterselfprofPage,
    ChemistselfprofPage,
    HospitalselfprofPage,
    PathalogyselfprofPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
