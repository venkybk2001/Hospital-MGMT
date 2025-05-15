import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminauthService {

  constructor() { }

  authenticate(username:string,password:string)
  {
    if(username=='xyz' && password=='xyz')
    {
      sessionStorage.setItem('username',username);
      return true;
    }
    else{
      return false
    }
  }

  isUserLoggedIn()
  {
    console.log("user login")
    let user = sessionStorage.getItem('username');

    return !(user==null)
  }

  logout()
  {
    console.log("user logout")
    sessionStorage.removeItem('username');
  }
}
