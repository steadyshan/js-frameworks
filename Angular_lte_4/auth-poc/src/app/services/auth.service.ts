import { Injectable } from '@angular/core';
import { constructDependencies } from '@angular/core/src/di/reflective_provider';
import { Http } from '@angular/http';
import { JwtHelper, tokenNotExpired } from 'angular2-jwt';
import 'rxjs/add/operator/map' ;
@Injectable()
export class AuthService {
  private jwtHelper:JwtHelper ;
  constructor(private http: Http) {
    this.jwtHelper = new JwtHelper();
  }

  login(credentials) { 
   return this.http.post('/api/authenticate', 
      JSON.stringify(credentials))
      .map(response => {
        if (response) { console.log(JSON.stringify(response)) ;}
        if (response && response.json().token) {
          localStorage.setItem('token',response.json().token);
          localStorage.setItem('credentials',this.jwtHelper.decodeToken(response.json().token));
          return true;
        }
        return false ;
      });
  }

  logout() { 
    localStorage.removeItem('token');
    localStorage.removeItem('credentials');
  }
  get currentUser() {
    let token = localStorage.getItem('token');
    let currentUserReturned = { name: '', admin:false}; 
    if (token)
      currentUserReturned = this.jwtHelper.decodeToken(token);
    return currentUserReturned;
  }

  isLoggedIn() { 
    return tokenNotExpired();
    /*
    let isLoggedin= false ;
  
    console.log('in isLoggedIn');
    let token = localStorage.getItem("token");
    isLoggedin = (token !== null);
    if (isLoggedin !== false){
       const expired = this.jwtHelper.isTokenExpired(token);
       isLoggedin = !expired ;
    }
    console.log(isLoggedin);
    return isLoggedin;
    */
  }
}

