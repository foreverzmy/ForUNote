import { Component, OnInit, Input, AfterViewInit } from '@angular/core';

import * as marked from 'marked';
import { MarkedService } from '../../services/marked/marked.service';

@Component({
  selector: 'app-marked',
  templateUrl: './marked.component.html',
  styleUrls: ['./marked.component.scss']
})
export class MarkedComponent implements OnInit, AfterViewInit {
  public content: string;
  constructor(
    private _markedService: MarkedService
  ) { }

  ngOnInit() {
    this.content = this._markedService.parse('# priview');
  }

  ngAfterViewInit() {
  }
}
