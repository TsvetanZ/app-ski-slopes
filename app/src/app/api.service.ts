import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import {environment} from '../environments/environment';

const apiURL = environment.apiURL;

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }


  loadSkislopes() {
    return this.httpClient.get(`${apiURL}/slopes`);

  }

  loadPost (limit?:number) {
    return this,this.httpClient.get(`${apiURL}/posts${limit? `?limit=${limit}` : '' }`);
  }
}