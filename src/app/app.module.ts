import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { JwtInterceptor } from './helpers/jwt.interceptor';
import { ErrorInterceptor } from './helpers/error.interceptor';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ConcoursComponent } from './admin/concours/concours.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { LayoutComponent } from './admin/layout/layout.component';
import { AddconcoursComponent } from './admin/addconcours/addconcours.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ConcoursComponent,
    NotFoundPageComponent,
    LayoutComponent,
    AddconcoursComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    ReactiveFormsModule,
    HttpClientModule,
    SlimLoadingBarModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
