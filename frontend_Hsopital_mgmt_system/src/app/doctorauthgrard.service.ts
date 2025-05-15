import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from '@angular/router';
import { DocautService } from './docaut.service';

@Injectable({
  providedIn: 'root'
})
export class DoctorauthgrardService implements CanActivate{

  constructor(private docautService:DocautService, private router:Router) { }

  canActivate() 
  {
    if(this.docautService.isUserLoggedIn())
    {
      return true;
    }
    else{
      this.router.navigate(['doclogin'])
      return false;
    }
  }
}
