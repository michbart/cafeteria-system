import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SecurityProvider } from '../security-provider';
import { SnackBar } from 'src/app/shared/snack-bar';

@Component({
  selector: 'cafeteria-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {
  public loginForm: FormGroup;

  constructor(
    private router: Router,
    private securityProvider: SecurityProvider,
    private snackBar: SnackBar,
  ) { }

  get usernameField() {
    return this.loginForm.get('username');
  }

  get passwordField() {
    return this.loginForm.get('password');
  }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;
      this.securityProvider.login(username, password)
        .then(result => {
          this.snackBar.createMessage('fn');
          this.router.navigate(['/']);
        })
        .catch(err => this.snackBar.createMessage(err));
    }
  }

}
