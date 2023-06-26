import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {Router, RouterModule } from '@angular/router';
import { ReactiveFormsModule  } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ListUpdateComponent } from './components/list-update/list-update.component';
import { ReactiveTestComponent } from './components/reactive-test/reactive-test.component';
import { ListService    } from './services/list.service';
import { ImageMoveComponent } from './components/image-move/image-move.component'
@NgModule({
  declarations: [
    AppComponent,
    ListUpdateComponent,
    ReactiveTestComponent,
    ImageMoveComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([{
      // path: '', component:ReactiveTestComponent,}, {
        path: '', component:ListUpdateComponent,}, {
          path: 'list-update', component:ListUpdateComponent
    }])
  ],
  providers: [ListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
