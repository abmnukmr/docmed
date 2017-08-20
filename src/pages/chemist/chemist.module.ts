import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChemistPage } from './chemist';

@NgModule({
  declarations: [
    ChemistPage,
  ],
  imports: [
    IonicPageModule.forChild(ChemistPage),
  ],
})
export class ChemistPageModule {}
