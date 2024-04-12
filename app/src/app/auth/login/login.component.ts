import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent  {

  constructor(private route: Router, private authServise : AuthService   ) { 
    this.authServise.user = {
      firstName: 'John',
      lastName: 'Smit',
        
    };

    this.route.navigate(['/'])
  }



}
