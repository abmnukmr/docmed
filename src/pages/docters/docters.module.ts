import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DoctersPage } from './docters';

@NgModule({
  declarations: [
    DoctersPage,
  ],
  imports: [
    IonicPageModule.forChild(DoctersPage),
  ],
})
export class DoctersPageModule {}
