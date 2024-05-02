import { Component } from '@angular/core';
import {  Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  get isLogged () {
    return  this.autService.isLoggetIn;
  }

  get user () {
    return this.autService.user;
  }

  constructor(private autService: AuthService, private router: Router) { }



}
