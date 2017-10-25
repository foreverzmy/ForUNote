import { Component, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';

import { Theme, ThemeService } from '../../services/theme/theme.service';

@Component({
  selector: 'app-theme-picker',
  templateUrl: './theme-picker.component.html',
  styleUrls: ['./theme-picker.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class ThemePickerComponent {
  public currentTheme: Theme;
  public themes: Array<Theme> = [
    {
      color: '#673AB7',
      className: 'deeppurple-amber'
    },
    {
      color: '#3F51B5',
      className: 'indigo-pink',
      isDefault: true
    },
    {
      color: '#E91E63',
      className: 'pink-bluegrey',
    },
    {
      color: '#9C27B0',
      className: 'purple-green',
    }
  ];

  constructor(
    private _themeService: ThemeService
  ) {
    const currentTheme = this._themeService.getStoredTheme();
    if (currentTheme) {
      this.changeTheme(currentTheme);
    }
  }

  public changeTheme(theme: Theme) {
    this.currentTheme = this._getCurrentThemeFromClass(theme.className);

    if (this.currentTheme) {
      this._themeService.storeTheme(this.currentTheme);
    }
  }

  private _getCurrentThemeFromClass(className: string): Theme {
    return this.themes.find(theme => theme.className === className);
  }
}
