import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {AuthService} from "../../../services/auth.service";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  loginUserForm: FormGroup;
  initialInputs: Object;

  constructor(private fb: FormBuilder, private auth: AuthService) {
    this.initialInputs = {
      email: new FormControl(''),
      password: new FormControl('')
    }
  }

  ngOnInit(): void {
    this.initializeForm();
  }

  // this creates the form reference using the initial inputs
  initializeForm(): void {
    this.loginUserForm = this.fb.group(this.initialInputs);
  }

  // submit
  // todo: send req to firebase
  handleSubmit(): void {
    if (this.loginUserForm.invalid) return;
    const {email, password} = this.loginUserForm.value;
    this.auth.login(email, password);
  }
}
