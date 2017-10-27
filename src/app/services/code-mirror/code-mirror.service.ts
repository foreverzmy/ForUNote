import { Injectable, ElementRef, EventEmitter } from '@angular/core';

import * as CodeMirror from 'codemirror';

@Injectable()
export class CodeMirrorService {
  private content = 'Input something...'; // 内容
  private doc: CodeMirror.Doc;
  private instance: CodeMirror.Editor;
  public onTextChange: EventEmitter<string> = new EventEmitter<string>();

  constructor() {

  }

  public editorInit(el, config) {
    this.instance = CodeMirror.fromTextArea(el, config);
    this.instance.setValue(this.content); // 显示内容
    this.doc = this.instance.getDoc();

    // 监听输入变化
    this.instance.on('change', () => {
      this.updateText(this.instance.getValue());
    });
  }

  private updateText(text) {
    this.content = text;
    this.onTextChange.emit(text);
    // this.onTouched();
  }

  public getText() {
    return this.content;
  }
}
