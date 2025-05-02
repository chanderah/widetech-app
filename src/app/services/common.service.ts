import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  private _isMobile = new BehaviorSubject<boolean>(false);
  isMobile$ = this._isMobile.asObservable();

  constructor() {
    this.checkScreenSize();
  }

  checkScreenSize() {
    this.isMobile = window.innerWidth <= 768;
  }

  get isMobile() {
    return this._isMobile.getValue();
  }

  set isMobile(value: boolean) {
    this._isMobile.next(value);
  }
}
