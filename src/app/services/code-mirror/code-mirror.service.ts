import { Injectable, ElementRef, EventEmitter } from '@angular/core';


import * as CodeMirror from 'codemirror';


@Injectable()
export class CodeMirrorService {
  private content = 'forever'; // 内容
  private doc: CodeMirror.Doc;
  private instance: CodeMirror.Editor;
  constructor() {

  }

  public editorInit(el, config) {
    this.instance = CodeMirror.fromTextArea(el, config);
    this.instance.setValue(this.content); // 显示内容
    this.doc = this.instance.getDoc();
  }
}
