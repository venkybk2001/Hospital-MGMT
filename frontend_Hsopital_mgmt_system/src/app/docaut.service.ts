import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DocautService {

  constructor() { }

  authenticate(username:string,password:string)
  {
    if(username=="abc" && password=="abc")
    {
      sessionStorage.setItem('username',username);
      return true;
    }
    else{
      return false;
    }
  }

  isUserLoggedIn()
  {
    console.log('doctor login')
    let user=sessionStorage.getItem('username');
    return !(user==null);
  }

  logout()
  {
    console.log('doctor logout')
     sessionStorage.removeItem('username');
  }
}
