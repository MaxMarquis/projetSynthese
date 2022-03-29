import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  public loggedIn = false;
  private logger = new BehaviorSubject<boolean>(this.loggedIn);
  constructor(private localStorageService: LocalStorageService) {
    this.loggedIn = this.localStorageService.getItem('login') !== null
    this.logger.next(this.loggedIn);
  }

  isLoggedIn(): Observable<boolean> {
    return this.logger.asObservable();
  }

  logIn(loginDetails: string) {
    this.localStorageService.setItem('login', loginDetails);
    this.loggedIn = true;
    this.logger.next(this.loggedIn);
  }

  // Log info reutilise dans la navBar
  loginInfo() {
    const info = this.localStorageService.getItem('login') || '{}'
    return JSON.parse(info);
  }

  logOut() {
    localStorage.removeItem('login');
    this.loggedIn = false;
    this.logger.next(this.loggedIn);
  }
}


