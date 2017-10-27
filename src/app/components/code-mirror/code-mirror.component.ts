import {
  Component,
  OnInit,
  AfterViewInit,
  ViewChild
} from '@angular/core';

import * as CodeMirror from 'codemirror';
import {
  CodeMirrorService
} from '../../services/code-mirror/code-mirror.service';

@Component({
  selector: 'app-code-mirror',
  templateUrl: './code-mirror.component.html',
  styleUrls: ['./code-mirror.component.scss']
})
export class CodeMirrorComponent implements OnInit, AfterViewInit {
  private config: CodeMirror.EditorConfiguration;
  @ViewChild('host') host;

  constructor(
    private _service: CodeMirrorService
  ) { }

  ngOnInit() {
    // CodeMirror 配置
    this.config = {
      mode: 'gfm',
      lineNumbers: true, // 行数
      lineWrapping: true,
      autofocus: true,
      fixedGutter: true,
      dragDrop: false,
      theme: 'nicemark',
      gutters: ['CodeMirror-linenumbers', 'CodeMirror-foldgutter'], extraKeys: {
        'Enter': 'newlineAndIndentContinueMarkdownList',
        'Ctrl-Q': function (cm) {
          cm.foldCode(cm.getCursor());
        }
      }
    };
  }

  ngAfterViewInit() {
    this._service.editorInit(this.host.nativeElement, this.config);
  }

}
