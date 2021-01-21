import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { DynamicPageComponent } from './components/dynamic-page/dynamic-page.component';
import { DynamicDirectiveDirective } from './components/dynamic-directive.directive';
import { LoginComponentComponent } from './components/login-component/login-component.component';
import { LoginRequestComponent } from './components/login-request/login-request.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    DynamicPageComponent,
    DynamicDirectiveDirective,
    LoginComponentComponent,
    LoginRequestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
