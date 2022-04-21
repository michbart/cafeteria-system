import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, AbstractControl, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import * as dayjs from 'dayjs';

import { CustomValidators } from '../../shared/custom-validators';
import { ResourceService } from '../../shared/resources/resource-service';
import { SnackBar } from '../../shared/snack-bar';
import { User } from '../../users/user';
import { Meal } from '../meal';
import { ALERGENS } from '../alergens';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'cafeteria-meal-form',
  templateUrl: './meal-form.component.html',
  styleUrls: [],
})
export class MealFormComponent implements OnInit {

  @Input() meal?: Meal;

  public form!: FormGroup;
  public pendingRequest: Observable<any>;
  public alergens: any[];
  public currency: string = environment.currency;

  private action: 'create' | 'edit';

  constructor(
    protected route: ActivatedRoute,
    protected router: Router,
    protected service: ResourceService<User>,
    protected snackBar: SnackBar,
  ) {
    this.service.endpointName = 'meals';
  }

  get nameField(): AbstractControl {
    return this.form.get('name');
  }

  get nameEngField(): AbstractControl {
    return this.form.get('nameEng');
  }

  get dateField(): AbstractControl {
    return this.form.get('date');
  }

  get costField(): AbstractControl {
    return this.form.get('cost');
  }

  get alergensField(): AbstractControl {
    return this.form.get('alergens');
  }

  get submitLabel() {
    return this.isEditAction ? 'Save' : 'Create';
  }

  get pageTitle() {
    return this.isCreateAction ? 'Create meal' : `${this.meal.name}`;
  }

  get isCreateAction() {
    return this.action === 'create';
  }

  get isEditAction() {
    return this.action === 'edit';
  }

  ngOnInit(): void {
    this.alergens = ALERGENS;
    this.route.data.subscribe((data: any) => {
      this.meal = data.meal?.data;
      this.action = data.action;
    });
    this.form = new FormGroup({
      name: new FormControl(this.getValue('name'), CustomValidators.requiredString),
      nameEng: new FormControl(this.getValue('nameEng'), CustomValidators.requiredString),
      date: new FormControl(dayjs(this.getValue('date')).toDate() || new Date(), Validators.required),
      cost: new FormControl(this.getValue('cost'), Validators.required),
      alergens: new FormControl(this.getValue('alergens')),
    });
  }

  onCancel() {
    return this.isCreateAction ? this.goToList() : this.goToDetail();
  }

  onSubmit() {
    if (this.form.valid) {
      const data = this.form.value;
      data.date = this.form.value.date.toISOString();
      this.pendingRequest = this.isEditAction ? this.service.editObject(this.meal.id, data) : this.service.createObject(data);
      this.pendingRequest.subscribe({
        next: (value) => this.goToDetail(value.id).then(() => this.snackBar.createMessage($localize `Meal created successfully.`)),
        error: () => {
          this.pendingRequest = null;
          this.snackBar.createMessage($localize `Operation failed.`);
        },
      });
    }
  }

  private goToDetail(id?: string) {
    return this.router.navigate([this.isCreateAction ? `../${id}/detail` : '../detail'], { relativeTo: this.route });
  }

  private goToList() {
    return this.router.navigate(['../'], { relativeTo: this.route });
  }

  private getValue<K extends keyof Meal>(key: K): Meal[K] | string {
    return this.meal?.[key] || '';
  }
}
