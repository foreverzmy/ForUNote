import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class SidenavService {
  private open = true;
  public onMenuChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor() {
  }

  public toggleMenu() {
    this.open = !this.open;
    this.onMenuChange.emit(this.open);
  }
}
