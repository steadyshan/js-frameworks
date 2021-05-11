import { Injectable } from '@angular/core';
import { constructDependencies } from '@angular/core/src/di/reflective_provider';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map' ;
@Injectable()
export class AuthService {
  constructor(private http: Http) {
  }

  login(credentials) { 
   return this.http.post('/api/authenticate', 
      JSON.stringify(credentials))
      .map(response => {
        if (response && response.json().token) {
          localStorage.setItem('token',response.json().token);
          return true;
        }
        return false ;
      });
  }

  logout() { 
    localStorage.removeItem('token');
  }


  isLoggedIn() { 
    return false;
  }
}

