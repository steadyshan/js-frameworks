import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import {Router, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';



import { LoginComponent } from './components/admin-and-login/login/login.component';
import { MiscDesignSpecsComponent } from './components/main/misc-design-specs/misc-design-specs.component';
import { HeaderComponent } from './components/admin-and-login/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MiscDesignSpecsComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule, 
    MatCardModule, 
    MatButtonModule,
    MatFormFieldModule,
    RouterModule.forRoot([
      {path:'specs', component:MiscDesignSpecsComponent},
   /* {
        path: 'technical', component: TechnicalDetailComponent,
        canActivate: [AuthGuard],
        data: {
          role: ['ADMIN','TECHNICAL'],
        }
      }, */
      
    ])  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
