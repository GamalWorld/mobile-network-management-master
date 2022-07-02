import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from "../../components/pages/login/login.component";
import {FormModule} from "../form/form.module";
import {AuthService} from "../../services/auth.service";
import {AngularFireAuthModule} from "@angular/fire/compat/auth";


@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    FormModule,
    AngularFireAuthModule
  ],
  providers: [AuthService],
  exports: [LoginComponent]
})
export class LoginModule {
}
