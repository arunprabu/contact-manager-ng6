import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate  {

  constructor(){ // do dep inj for AuthService

  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    //we have to connect with a service AuthService...
    // //if(isAuth){
    //   return true;
    // }else{
    //   //redirect the user to login page 
    //   return false;
    // }

    //

    return true;
  }

}
