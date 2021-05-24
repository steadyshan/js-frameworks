import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppMuseumIntroComponent } from './app-museum-intro/app-museum-intro.component';
import { SideNavBarComponent } from './components/side-nav-bar/side-nav-bar.component';

import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    AppMuseumIntroComponent,
    SideNavBarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  // bootstrap: [AppComponent]
  bootstrap: [AppMuseumIntroComponent]
})
export class AppModule { }
