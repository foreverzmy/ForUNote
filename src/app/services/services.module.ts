import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ThemeService } from './theme/theme.service';
import { CodeMirrorService } from './code-mirror/code-mirror.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  declarations: [],
  providers: [
    ThemeService,
    CodeMirrorService
  ],
  exports: [],
})
export class ServicesModule { }
