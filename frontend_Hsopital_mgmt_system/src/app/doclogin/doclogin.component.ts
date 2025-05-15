import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DocautService } from '../docaut.service';

@Component({
  selector: 'app-doclogin',
  templateUrl: './doclogin.component.html',
  styleUrl: './doclogin.component.css'
})
export class DocloginComponent {

  username:string='';
  password:string='';

  inValidLogin=false;

  constructor(private router:Router, private docauth:DocautService){}

  checkLogin()
  {
    if(this.docauth.authenticate(this.username, this.password))
    {
      
      this.router.navigate(['docdash'])
       this.inValidLogin=false;
    }
    else
    {
      this.inValidLogin=true;
      alert("Wrong Password")
        this.router.navigate(['home'])
    }
  }
}
