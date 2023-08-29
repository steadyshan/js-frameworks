import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Import FormsModule

import { AppRoutingModule } from './app-routing.module';
import {Router, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

// user generated
/// UI components
import { TabbingContainerComponent } from './components/tabbing-and-layers/tabbing-container/tabbing-container.component';
import { ThemeNavigationComponent } from './components/theme-navigation/theme-navigation.component';
import { AreaSummaryPageComponent } from './area-summary-page/area-summary-page.component';
import { LandingPageIntroduction } from './components/main-section/landing-page-introduction/landing-page-introduction.component';

import { TechnicalDetailComponent } from './components/admin/technical-detail/technical-detail.component';
import { TopNavBarComponent } from './components/top-nav-bar/top-nav-bar.component';
// service layer 
import { ListFunnelService } from './services/list-funnel.service';
import { AuthGuard } from './services/auth.guard';
import { CategoriesService } from './services/categories.service';
import { AuthService } from './services/auth.service';
@NgModule({
  declarations: [
    AppComponent,
    ThemeNavigationComponent,
    AreaSummaryPageComponent,
    LandingPageIntroduction,
    TopNavBarComponent,
    TechnicalDetailComponent,
    TabbingContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule, RouterModule.forRoot([
      {path:'home', component:LandingPageIntroduction}, {
        path: 'technical', component: TechnicalDetailComponent,
        canActivate: [AuthGuard],
        data: {
          role: ['ADMIN','TECHNICAL'],
        }
      },
    ])  ],
  providers: [CategoriesService, AuthService,ListFunnelService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
