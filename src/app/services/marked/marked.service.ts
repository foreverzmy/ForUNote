import { Injectable, OnInit, EventEmitter } from '@angular/core';

import * as Marked from 'marked';

@Injectable()
export class MarkedService {
  private content: string;
  private marked;
  private renderer: Marked.Renderer;
  private config: Marked.MarkedOptions;

  constructor() {
    this.init();
  }

  private init() {
    this.renderer = new Marked.Renderer();
    // this.renderer.link = (href, title, text) => this.handleLink(href, title, text);
    // this.renderer.image = (href, title, text) => this.handleImage(href, title, text);
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
      // highlight: this.highlight,
      // sourceLine: true
    };
    this.marked = Marked.setOptions(this.config);
  }

  public parse(text: string) {
    return this.marked.parse(text);
  }

}
