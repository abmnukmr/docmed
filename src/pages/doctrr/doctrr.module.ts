import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DoctrrPage } from './doctrr';

@NgModule({
  declarations: [
    DoctrrPage,
  ],
  imports: [
    IonicPageModule.forChild(DoctrrPage),
  ],
})
export class DoctrrPageModule {}
