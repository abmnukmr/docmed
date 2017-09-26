import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import {MorePage} from "../more/more";
import {GoogleloginPage} from "../googlelogin/googlelogin";
import * as firebase from 'firebase';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
 rootPage:any;
  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;
  tab4Root = MorePage;
  constructor() {

  }






}
