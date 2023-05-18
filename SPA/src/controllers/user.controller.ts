import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class UserController {

    public urlOrigin = "http://localhost:8000/";

    constructor(private http: HttpClient) {}

    async createUser(user: any) {
      let url = this.urlOrigin + 'users/createUser';
      return this.http.post(url, user, {headers: {'Content-Type': 'application/json'}});
      
    }

    async loginUser(user : any) {
      let url = this.urlOrigin + 'login/token';
      return this.http.post(url, user, {headers: {'Content-Type': 'application/json'}});
    }   
    
}