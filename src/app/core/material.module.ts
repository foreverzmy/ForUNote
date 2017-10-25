import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatCardModule,
  MatRadioModule,
  MatInputModule,
  MatToolbarModule,
  MatMenuModule,
  MatGridListModule,
  MatSidenavModule,
} from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    MatRadioModule,
    MatInputModule,
    MatToolbarModule,
    MatMenuModule,
    MatGridListModule,
    MatSidenavModule
  ],
  declarations: [],
  providers: [],
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    MatRadioModule,
    MatInputModule,
    MatToolbarModule,
    MatMenuModule,
    MatGridListModule,
    MatSidenavModule
  ]
})
export class MaterialModule { }
