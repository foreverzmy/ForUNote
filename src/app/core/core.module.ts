import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialModule } from './material.module';
import { ServicesModule } from '../services/services.module';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FlexLayoutModule,
    MaterialModule,
    ServicesModule,
  ],
  declarations: [],
  providers: [],
  exports: [
    BrowserAnimationsModule,
    FlexLayoutModule,
    MaterialModule,
    ServicesModule,
  ]
})
export class CoreModule { }
