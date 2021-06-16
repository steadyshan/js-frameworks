import { RegularViewerComponent } from './components/views-and-lists/regular-viewer/regular-viewer.component';
import { UnpluggedViewerComponent } from './components/views-and-lists/unplugged-viewer/unplugged-viewer.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppMuseumIntroComponent } from './app-museum-intro/app-museum-intro.component';
import { SideNavBarComponent } from './components/side-nav-bar/side-nav-bar.component';

import { FormsModule } from '@angular/forms';
import {Router, RouterModule } from '@angular/router';
import { RegisterAddUserComponent } from './components/admin/register-add-user/register-add-user.component';
import { MenuItemsComponent } from './components/menu-items/menu-items.component';
import { ViewerComponent } from './components/viewer/viewer.component';
import { ContentManagementComponent } from './components/admin/content-management/content-management.component';
import { CategoriesService } from './services/categories.service';
@NgModule({
  declarations: [
    AppComponent,
    AppMuseumIntroComponent,
    SideNavBarComponent,
    RegisterAddUserComponent,
    MenuItemsComponent,
    ViewerComponent,
    RegularViewerComponent,
    UnpluggedViewerComponent,
    ContentManagementComponent
  ],
  imports: [
    BrowserModule,
   // AppRoutingModule
   FormsModule,
    RouterModule.forRoot([{path:'', component:AppMuseumIntroComponent},
    {path:'register', component:RegisterAddUserComponent},
    {path: 'view/:theme', component: RegularViewerComponent },
    {path: 'unplugged-view/:theme', component: UnpluggedViewerComponent },
    {path: 'content-manage', component: ContentManagementComponent }])
    ],
    providers: [CategoriesService],
    bootstrap: [AppComponent]
})
export class AppModule { }
