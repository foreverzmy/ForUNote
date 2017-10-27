import { Injectable, OnInit, EventEmitter } from '@angular/core';

import * as Marked from 'marked';
import * as hljs from 'highlight.js';

@Injectable()
export class MarkedService {
  private content: string;
  private marked;
  private renderer: Marked.Renderer;
  private config: Marked.MarkedOptions;

  constructor() {
    this.init();
  }

  get value() {
    return this.content;
  }
  set value(v) {
    if (v !== this.content) {
      this.content = v;
      // this.updateValue(v);
    }
  }

  private init() {
    this.renderer = new Marked.Renderer();
    this.renderer.link = (href, title, text) => this.handleLink(href, title, text);
    this.renderer.image = (href, title, text) => this.handleImage(href, title, text);
    this.renderer.code = function (code, language) {
      return '<pre><code class="hljs ' + language + '">' +
        hljs.highlight(language, code).value +
        '</code></pre>';
    };
    this.config = {
      renderer: this.renderer,
      gfm: true,
      tables: true,
      breaks: true,
      pedantic: false,
      sanitize: false,
      smartLists: true,
      smartypants: false,
      langPrefix: 'language-',
    };
    this.marked = Marked.setOptions(this.config);
  }

  public parse(text: string) {
    return this.marked.parse(text);
  }

  private handleLink(href, title, text) {
    return `<a href=${href} title=${title}>${text}</a>`;
  }

  private handleImage(href, title, text) {
    return `<img src=${href} title=${text}/><i style='margin:8px auto 0 auto;display:table'>${text}</i>`;
  }

  // 代码高亮
  private highlight(code, language) {
    if (language === 'auto') {
      return hljs.highlightAuto(code).value;
    }
  }

}
