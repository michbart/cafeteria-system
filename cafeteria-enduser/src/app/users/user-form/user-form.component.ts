import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { User } from '../user';
import { ResourceService } from '../../shared/resources/resource-service';
import { SnackBar } from '../../shared/snack-bar';
import { CustomValidators } from '../../shared/custom-validators';
import { ROLES } from '../../auth/roles';
import { AccessChecker } from '../../auth/access-checker';

@Component({
  selector: 'cafeteria-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: [],
})
export class UserFormComponent implements OnInit {

  @Input() user?: User;

  public form!: FormGroup;
  public pendingRequest: Observable<any>;
  public roles: any[];

  private action: 'create' | 'edit' | 'register';

  constructor(
    protected route: ActivatedRoute,
    protected router: Router,
    protected service: ResourceService<User>,
    protected snackBar: SnackBar,
    public accessChecker: AccessChecker,
  ) {
    this.service.endpointName = 'users';
  }

  get givenNameField(): AbstractControl {
    return this.form.get('givenName');
  }

  get surnameField(): AbstractControl {
    return this.form.get('surname');
  }

  get mailField(): AbstractControl {
    return this.form.get('mail');
  }

  get passwordField(): AbstractControl {
    return this.form.get('password');
  }

  get confirmPasswordField(): AbstractControl {
    return this.form.get('confirmPassword');
  }

  get rolesField(): AbstractControl {
    return this.form.get('roles');
  }

  get changePasswordField(): AbstractControl {
    return this.form.get('changePassword');
  }

  get submitLabel() {
    return this.isEditAction ? $localize `Save` : $localize `Create`;
  }

  get pageTitle() {
    if (this.isRegisterAction) {
      return $localize `Register`;
    }
    return this.isCreateAction ? $localize `Create user` : `${this.user.givenName} ${this.user.surname}`;
  }

  get isCreateAction() {
    return this.action === 'create';
  }

  get isEditAction() {
    return this.action === 'edit';
  }

  get isRegisterAction() {
    return this.action === 'register';
  }

  ngOnInit(): void {
    this.roles = Object.entries(ROLES).map(([key, value]) => ({ key, value }));
    this.route.data.subscribe((data: any) => {
      this.user = data.user?.data;
      this.action = data.action;
    });
    this.form = new FormGroup({
      givenName: new FormControl(this.getValue('givenName'), CustomValidators.requiredString),
      surname: new FormControl(this.getValue('surname'), CustomValidators.requiredString),
      mail: new FormControl(this.getValue('mail'), Validators.compose([Validators.email, CustomValidators.requiredString])),
      password: new FormControl({ value: '', disabled: !this.isRegisterAction }, Validators.compose([
        CustomValidators.requiredString,
        Validators.pattern(/(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).*/),
        Validators.minLength(6),
      ])),
      confirmPassword: new FormControl({ value: '', disabled: !this.isRegisterAction }, CustomValidators.requiredString),
      roles: new FormControl(this.getValue('roles')),
      changePassword: new FormControl(false),
    }, {
      validators: CustomValidators.checkPasswords,
    });
    this.changePasswordField.valueChanges.subscribe(this.onChangePasswordChange.bind(this));
  }

  onCancel() {
    if (this.isRegisterAction) {
      return this.router.navigate(['../'], { relativeTo: this.route });
    }
    return this.isCreateAction ? this.goToList() : this.goToDetail();
  }

  onSubmit() {
    if (this.form.valid) {
      const data = this.form.value;
      data.username = data.surname.toLowerCase();
      data.balance = 0;
      delete data.confirmPassword;
      if (!data.changePassword) {
        delete data.password;
      }
      delete data.changePassword;
      this.pendingRequest = this.isEditAction ? this.service.editObject(this.user.id, data) : this.service.createObject(data);
      this.pendingRequest.subscribe({
        next: (value) => {
          if (this.isRegisterAction) {
            this.goToMeals().then(() => this.snackBar.createMessage($localize `Registration successful.`));
          } else {
            this.goToDetail(value.data.id).then(() => this.snackBar.createMessage($localize `User created succesfully.`));
          }
        },
        error: () => {
          this.pendingRequest = null;
          this.snackBar.createMessage($localize `Operation failed.`);
        },
      });
    }
  }

  private onChangePasswordChange(changePassword: boolean) {
    if (changePassword) {
      this.passwordField.enable();
      this.confirmPasswordField.enable();
    } else {
      this.passwordField.disable();
      this.confirmPasswordField.disable();
    }
  }

  private goToMeals() {
    return this.router.navigate(['/']);
  }

  private goToDetail(id?: string) {
    return this.router.navigate([this.isCreateAction ? `../${id}/detail` : '../detail'], { relativeTo: this.route });
  }

  private goToList() {
    return this.router.navigate(['../'], { relativeTo: this.route });
  }

  private getValue<K extends keyof User>(key: K): User[K] | string {
    return this.user?.[key] || '';
  }

}
