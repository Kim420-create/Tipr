import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router : Router, private authService : AuthService){}
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      if(this.authService.isLoggedIn() !== true) {
        window.alert("Accès non autorisé !");
        this.router.navigate(["login"])
      }
      
      // if(!(localStorage.getItem("isLoggedIn") === "true")){
      //   this.router.navigate(['login']);
      //   return false;
      // }
      
    return true;
  }
  
}
