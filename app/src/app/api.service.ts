import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import {environment} from '../environments/environment';
import { IskiSlopes } from './interfaces/skiSlopes';
import { Ipost } from './interfaces/post';

const apiURL = environment.apiURL;

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }


  loadSkislopes() {
    return this.httpClient.get<IskiSlopes[]>(`${apiURL}/slopes`);

  }

  loadPost (limit?:number) {
    return this.httpClient.get<Ipost[]>(`${apiURL}/posts${limit? `?limit=${limit}` : '' }`);
  }
}
