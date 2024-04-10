import { Injectable } from '@angular/core';
import { IUserId } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user : IUserId | null = null ;

  get isLoggetIn () {
    return this.user !== null; 
  }
  

  constructor() { }
}
