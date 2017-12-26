import {AuthService} from '../AuthService';
import {CanActivate} from '@angular/router';
import {Injectable} from '@angular/core';

@Injectable()
export class LoggedInGuard implements CanActivate {

  constructor(private authService: AuthService) {

  }

  canActivate(): boolean{
    return this.authService.isLoggedIn();
  }
}
