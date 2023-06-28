import { EventEmitter, Injectable,Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url:string = '';

  constructor() { }

  isLoggedIn:boolean = false;

  login(code:string){
    this.isLoggedIn = code === '123';
    return this.isLoggedIn;
  }

  logout() {
    this.isLoggedIn = false;
  }
}
