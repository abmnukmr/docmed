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
import {DoceditPage} from "../pages/docedit/docedit";
import {HospieditPage} from "../pages/hospiedit/hospiedit";
import {ChemisteditPage} from "../pages/chemistedit/chemistedit";
import {AurvededitPage} from "../pages/aurvededit/aurvededit";
import {PatheditPage} from "../pages/pathedit/pathedit";
import {GoogleloginPage} from "../pages/googlelogin/googlelogin";
import {AdddoctorPage} from "../pages/adddoctor/adddoctor";
import {AddhospitalPage} from "../pages/addhospital/addhospital";
import {AddchemistPage} from "../pages/addchemist/addchemist";
import {AddayurvedaPage} from "../pages/addayurveda/addayurveda";
import {AddpathaPage} from "../pages/addpatha/addpatha";
import {OrderchemPage} from "../pages/orderchem/orderchem";
import {OrderaurPage} from "../pages/orderaur/orderaur";
import {Camera} from "@ionic-native/camera";
import {FilePath} from "@ionic-native/file-path";
import {FileTransfer, FileTransferError, FileTransferObject} from "@ionic-native/file-transfer";
import {File} from "@ionic-native/file";
import { LocationProvider } from '../providers/location/location';
import {Location} from "@angular/common";
import {Geolocation} from "@ionic-native/geolocation";
import {Diagnostic} from "@ionic-native/diagnostic";
import {OpenNativeSettings} from "@ionic-native/open-native-settings";
import {LocationAccuracy} from "@ionic-native/location-accuracy";
import {BackgroundGeolocation} from "@ionic-native/background-geolocation";

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
    PathalogyselfprofPage,
    DoceditPage,
    HospieditPage,
    ChemisteditPage,
    AurvededitPage,
    PatheditPage,
    GoogleloginPage,
    AdddoctorPage,
    AddhospitalPage,
    AddchemistPage,
    AddayurvedaPage,
    AddpathaPage,
    OrderchemPage,
    OrderaurPage




  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp,{ tabsHideOnSubPages: true,
    })
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
    PathalogyselfprofPage,
    DoceditPage,
    HospieditPage,
    ChemisteditPage,
    AurvededitPage,
    PatheditPage,
    GoogleloginPage,
    AdddoctorPage,
    AddhospitalPage,
    AddchemistPage,
    AddayurvedaPage,
    AddpathaPage,
    OrderchemPage,
    OrderaurPage


  ],
  providers: [ Camera,FilePath,File,FileTransfer,FileTransferObject,
    StatusBar,Geolocation,LocationProvider,Diagnostic,OpenNativeSettings,LocationAccuracy,
    SplashScreen,BackgroundGeolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LocationProvider
  ]
})
export class AppModule {}
