import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SharedServiceService } from '../services/shared-service.service';
import { Location } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ManagerGuard implements CanActivate {
  constructor(private sharedService: SharedServiceService, private location: Location){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const isLoggedIn = this.sharedService.get('manager','session');
      if(isLoggedIn && isLoggedIn.profile.role.toLowerCase() === 'manager') {
        return true;
      } else {
        this.location.back();
        return false;
      }
  }
  
}