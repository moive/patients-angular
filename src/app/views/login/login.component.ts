import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api/api.service';
import { ILogin } from '../../models/login.interface';
import { IResponse } from '../../models/response.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup = new FormGroup({
    usuario: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  errorStatus: boolean = false;
  msgError: string = '';

  constructor(private apiService: ApiService, private router: Router) {}

  onLogin(form: ILogin) {
    this.apiService.loginByEmail(form).subscribe((data: IResponse) => {
      const { status, result } = data;
      const { token }: any = result;
      if (status == 'ok') {
        localStorage.setItem('token', token);
        this.router.navigate(['dashboard']);
      } else {
        this.msgError = result.error_msg;
        this.errorStatus = true;
      }
    });
    this.loginForm.reset();
  }
}
