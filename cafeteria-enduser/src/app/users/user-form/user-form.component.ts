import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { User } from '../user';
import { ActivatedRoute, Router } from '@angular/router';
import { ResourceService } from 'src/app/shared/resources/resource-service';
import { SnackBar } from 'src/app/shared/snack-bar';
import { Observable } from 'rxjs';

@Component({
  selector: 'cafeteria-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: [],
})
export class UserFormComponent implements OnInit {

  @Input() user?: User;

  public form!: FormGroup;
  public pendingRequest: Observable<any>;

  private action: 'create' | 'edit';

  constructor(
    protected route: ActivatedRoute,
    protected router: Router,
    protected service: ResourceService<User>,
    protected snackBar: SnackBar,
  ) { }

  get givenNameField(): AbstractControl {
    return this.form.get('givenName');
  }

  get surnameField(): AbstractControl {
    return this.form.get('surname');
  }

  get mailField(): AbstractControl {
    return this.form.get('mail');
  }

  get submitLabel() {
    return this.isCreateAction ? 'Create' : 'Save';
  }

  get pageTitle() {
    return this.isCreateAction ? 'Create user' : `${this.user.givenName} ${this.user.surname}`;
  }

  get isCreateAction() {
    return this.action === 'create';
  }

  ngOnInit(): void {
    this.route.data.subscribe((data: any) => {
      this.user = data.user;
      this.action = data.action;
    });
    this.form = new FormGroup({
      givenName: new FormControl(this.getValue('givenName'), Validators.required),
      surname: new FormControl(this.getValue('surname'), Validators.required),
      mail: new FormControl(this.getValue('mail'), Validators.compose([Validators.email, Validators.required])),
    });
  }

  onCancel() {
    return this.isCreateAction ? this.goToList() : this.goToDetail();
  }

  onSubmit() {
    if (this.form.valid) {
      const data = this.form.value;
      this.pendingRequest = this.isCreateAction ? this.service.createObject(data) : this.service.editObject(data);
      this.pendingRequest.subscribe(
        next => this.goToDetail().then(() => this.snackBar.createMessage('fn')),
        error => {
          this.pendingRequest = null;
          this.snackBar.createMessage('bz');
        },
      );
    }
  }

  private goToDetail() {
    return this.router.navigate(['../detail'], { relativeTo: this.route });
  }

  private goToList() {
    return this.router.navigate(['../'], { relativeTo: this.route });
  }

  private getValue<K extends keyof User>(key: K): User[K] | string {
    return this.user?.[key] || '';
  }

}
