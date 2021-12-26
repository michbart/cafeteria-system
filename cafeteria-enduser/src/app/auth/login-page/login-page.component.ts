import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { SecurityProvider } from '../security-provider';
import { SnackBar } from 'src/app/shared/snack-bar';
import { CustomValidators } from 'src/app/shared/custom-validators';

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
      username: new FormControl('', CustomValidators.requiredString),
      password: new FormControl('', CustomValidators.requiredString),
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;
      this.securityProvider.login(username, password)
        .then(() => {
          this.snackBar.createMessage($localize `Login successful.`);
          this.router.navigate(['/']);
        })
        .catch(() => this.snackBar.createMessage($localize `Login failed.`));
    }
  }

}
