import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ThemeService } from './theme/theme.service';
import { SidenavService } from './sidenav/sidenav.service';
import { CodeMirrorService } from './code-mirror/code-mirror.service';
import { MarkedService } from './marked/marked.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  declarations: [],
  providers: [
    ThemeService,
    SidenavService,
    CodeMirrorService,
    MarkedService,
  ],
  exports: [],
})
export class ServicesModule { }
