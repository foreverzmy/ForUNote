import { Component, OnInit, Input, AfterViewInit } from '@angular/core';

import * as marked from 'marked';
import { MarkedService } from '../../services/marked/marked.service';
import { CodeMirrorService } from '../../services/code-mirror/code-mirror.service';

@Component({
  selector: 'app-marked',
  templateUrl: './marked.component.html',
  styleUrls: ['./marked.component.scss']
})
export class MarkedComponent implements OnInit, AfterViewInit {
  public content: string;
  constructor(
    private _codeMirrorService: CodeMirrorService,
    private _markedService: MarkedService
  ) { }

  ngOnInit() {
    this.getText();
  }

  ngAfterViewInit() {
  }

  // 获取 markdown 文档
  private getText() {
    this.content = this._codeMirrorService.getText();
    this._codeMirrorService.onTextChange.subscribe(text => {
      this.content = this._markedService.parse(text);
    });
  }

}
