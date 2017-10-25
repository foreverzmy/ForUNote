import { Component, OnInit } from '@angular/core';

import { Theme, ThemeService } from '../../services/theme/theme.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  public currentTheme: Theme;
  constructor(
    public _themeService: ThemeService
  ) { }

  ngOnInit() {
    this.getThemeClass();
  }

  getThemeClass() {
    this.currentTheme = this._themeService.getStoredTheme();
    this._themeService.onThemeChange.subscribe(theme => {
      this.currentTheme = theme;
    });
  }
}
