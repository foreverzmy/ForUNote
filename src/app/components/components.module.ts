import { NgModule } from '@angular/core';

import { CoreModule } from '../core/core.module';

import { MainComponent } from './main/main.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { ThemePickerComponent } from './theme-picker/theme-picker.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FileTreeComponent } from './file-tree/file-tree.component';

@NgModule({
  imports: [
    CoreModule
  ],
  declarations: [
    MainComponent,
    ToolbarComponent,
    ThemePickerComponent,
    SidebarComponent,
    FileTreeComponent
  ],
  providers: [
  ],
  exports: [
    MainComponent
  ]
})
export class ComponentsModule { }
