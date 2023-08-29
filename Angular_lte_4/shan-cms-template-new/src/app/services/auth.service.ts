import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
/*
 June 19 2023 - introduction of authentication and authorization.
 Step1 is to filter some pages based on user role.
 As this point, hard coded, if and when required and bandwidth will enter into config file...
 ...
 Also, at this point, the intent is more from avoiding TMI for some users, keeping some views visible for interested parties,
 And also, I'd probably 'mask' some themes from some user roles..
 (Bottom line - more a convenience thing than security)
*/

export class AuthService {
  // Step 1 - hard code, using only ADMIN, and shantanu/technician
  /* next steps - 
    - map (hard coded) users to the roles in a new object/list
    - sub level auth. showing and masking some themes based on user roles
    - multiple roles
    - add logic for password (again, at this stage, cosmetic value)
  */
  Roles = [
    "ADMIN",
    "TECHNICAL",
    "USER-ALL",
    "USER-OBJECTS",
    "USER-BEINGS"
  ]
  users = [
    "shantanu",
    "technician",
    "other"
  ]
  constructor() { }
  login(username:string){

    localStorage.removeItem('role') ;
    localStorage.removeItem('userId'); 
    localStorage.setItem('userId',username);
    localStorage.setItem('role',this.loginHardCode(username));
  }
  private loginHardCode(username:string):string {
    let selectedIndex = 2 ;
    if (username === 'shantanu' ||  username === 'admin') {
      selectedIndex = 0 ;
    }
      if ( username === 'technician' ) {
       selectedIndex = 1 ;
    }
    return this.Roles[selectedIndex];
  }
  getRole():string {
    let role = localStorage.getItem('role') ;
    return role? role:'' ;
  }
  logout() {
  }
}
