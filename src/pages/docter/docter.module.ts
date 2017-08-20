import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DocterPage } from './docter';

@NgModule({
  declarations: [
    DocterPage,
  ],
  imports: [
    IonicPageModule.forChild(DocterPage),
  ],
})
export class DocterPageModule {}
