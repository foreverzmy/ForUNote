import { Injectable, EventEmitter } from '@angular/core';

export interface Theme {
  color: string;
  className: string;
  isDefault?: boolean;
}

@Injectable()
export class ThemeService {
  static storageKey = 'theme-current';
  public onThemeChange: EventEmitter<Theme> = new EventEmitter<Theme>();

  constructor() { }

  public storeTheme(theme: Theme) {
    try {
      window.localStorage[ThemeService.storageKey] = JSON.stringify(theme);
      window.document.body.className = theme.className;
    } catch (err) { }
    this.onThemeChange.emit(theme);
  }

  public getStoredTheme(): Theme {
    try {
      return JSON.parse(window.localStorage[ThemeService.storageKey] || null);
    } catch (err) {
      return null;
    }
  }

  public clearStorage() {
    try {
      window.localStorage.removeItem(ThemeService.storageKey);
    } catch (err) { }
  }
}
