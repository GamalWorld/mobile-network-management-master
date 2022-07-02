import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {AngularSvgIconModule} from 'angular-svg-icon';
import {HttpClientModule} from "@angular/common/http";
import {AngularFireModule} from "@angular/fire/compat";
import {environment} from '../environments/environment';
import {LoginModule} from "./features/login/login.module";
import {FrontPageComponent} from './components/pages/front-page/front-page.component';

@NgModule({
  declarations: [
    AppComponent,
    FrontPageComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase), // connects to the firebase project
    AngularSvgIconModule.forRoot(),
    LoginModule,
  ],
  providers: [],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
