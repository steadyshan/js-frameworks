import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [
    trigger('fadeInOut', [
      state('void', style({ opacity: 0 })),
      transition('void <=> *', animate(1000)),
    ]),
  ],
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  loggedIn: boolean = false;
  fade: boolean = false;
  isDisplayed = true;
  userSessionName?= "";
  isLoggedIn= localStorage.getItem('userid')? true : false ; ;

 get IsDisplayed():boolean {
    return this.isDisplayed ;
  }


  get IsLoggedIn(): boolean {
    return this.isLoggedIn ;
  }

  login() {
    console.log('Username: ', this.username);
    console.log('Password: ', this.password);
    localStorage.setItem('userid', this.username);
    if (this.username.trim() !== '' && this.password.trim() !== ''){
      this.fade = true ;
      this.isLoggedIn = true;
    }
    // Add your authentication logic here
  }
/*
<div class="login-box" [@fadeInOut]="fade" (@fadeInOut.done)="animationDone($event)" *ngIf="!isHidden">
  <!-- ... your login component content ... -->
</div>

*/
  animationDone(event: any) {
    if (event.toState === 'void') {
      // The fade-out animation has completed, you can now safely remove the component.
      this.removeComponent();
    }
  }
  removeComponent() {
    // You can use a service, an event emitter, or any other method
    // to communicate with the parent component or module to remove this component.
    // For demonstration, we'll just set a flag to hide the component using ngIf.
    this.isLoggedIn = true;
    
  }

  logout() {
      this.isLoggedIn = false;
  }
}
