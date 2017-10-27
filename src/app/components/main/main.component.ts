import { Component, OnInit } from '@angular/core';

import { Theme, ThemeService } from '../../services/theme/theme.service';
import { SidenavService } from '../../services/sidenav/sidenav.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  public currentTheme: Theme; // 当前主题
  public open: boolean; // 侧边栏开关
  constructor(
    private _themeService: ThemeService,
    private _sidenavService: SidenavService
  ) { }

  ngOnInit() {
    this.getThemeClass();
    this.menuOpen();
  }

  // 侧边栏开关
  menuOpen() {
    this.open = true;
    this._sidenavService.onMenuChange.subscribe(open => this.open = open);
  }

  getThemeClass() {
    this.currentTheme = this._themeService.getStoredTheme();
    this._themeService.onThemeChange.subscribe(theme => {
      this.currentTheme = theme;
    });
  }
}
