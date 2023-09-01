import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  userSessionName?= "";
  get IsLoggedIn(): boolean {
    let isLoggedIn=false ;
    this.userSessionName = localStorage.getItem('userloggedIn')?.toString();
    if(this.userSessionName) {
      isLoggedIn=this.userSessionName.indexOf(':true') >=0 ;
    }
    return  isLoggedIn ;
  }

  logout() {

  }
}
