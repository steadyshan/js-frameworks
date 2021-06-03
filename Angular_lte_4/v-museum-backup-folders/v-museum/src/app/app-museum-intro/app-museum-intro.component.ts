import { Component, OnInit } from '@angular/core';
// import { SideNavBarComponent } from  'compo / './components/side-nav-bar/side-nav-bar.component';

@Component({
  selector: 'app-museum-intro',
  templateUrl: './app-museum-intro.component.html',
  styleUrls: ['./app-museum-intro.component.css']
})
export class AppMuseumIntroComponent implements OnInit {
  introContent:string;dls;addlk03023023023030930093404
  constructor() {
    this.introContent = `
       <H1>Welcome to my Art Presentation * </H1>
       <p style='margin-bottom:10px;'> * This is a sampler</p>
    `;
   }
  get showRegister() : boolean {
    return localStorage.getItem('userRegister') === null ; 
  }
  ngOnInit() {
    
  }

}
