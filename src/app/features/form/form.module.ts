import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginFormComponent} from "../../components/form/login-form/login-form.component";
import {CustomInputComponent} from "../../components/form/custom-input/custom-input.component";
import {ReactiveFormsModule} from "@angular/forms";
import {AngularSvgIconModule} from "angular-svg-icon";


@NgModule({
  declarations: [LoginFormComponent, CustomInputComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AngularSvgIconModule
  ],
  exports: [LoginFormComponent, CustomInputComponent]
})
export class FormModule {
}
