import { NgModule } from '@angular/core';

import { CoreModule } from '../core/core.module';

import { MainComponent } from './main/main.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { ThemePickerComponent } from './theme-picker/theme-picker.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FileTreeComponent } from './file-tree/file-tree.component';
import { WorkspaceComponent } from './workspace/workspace.component';
import { EditorComponent } from './editor/editor.component';
import { PreviewComponent } from './preview/preview.component';
import { CodeMirrorComponent } from './code-mirror/code-mirror.component';
import { MarkedComponent } from './marked/marked.component';

@NgModule({
  imports: [
    CoreModule
  ],
  declarations: [
    MainComponent,
    ToolbarComponent,
    ThemePickerComponent,
    SidebarComponent,
    FileTreeComponent,
    WorkspaceComponent,
    EditorComponent,
    PreviewComponent,
    CodeMirrorComponent,
    MarkedComponent
  ],
  providers: [
  ],
  exports: [
    MainComponent
  ]
})
export class ComponentsModule { }
