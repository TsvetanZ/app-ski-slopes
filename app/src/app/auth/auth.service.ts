import { Injectable } from '@angular/core';
import { Iuser } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user : Iuser | null = null ;

  get isLoggetIn () {
    return this.user !== null; 
  }
  

  constructor() { }
}
