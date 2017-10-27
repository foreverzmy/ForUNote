import { Component, OnInit } from '@angular/core';

import { SidenavService } from '../../services/sidenav/sidenav.service';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {
  constructor(
    private _sidenavService: SidenavService
  ) { }

  ngOnInit() { }

  public toogleMenu() {
    this._sidenavService.toggleMenu();
  }
}
