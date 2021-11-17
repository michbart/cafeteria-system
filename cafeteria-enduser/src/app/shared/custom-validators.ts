import { ValidatorFn, AbstractControl, ValidationErrors, Validators, FormControl } from '@angular/forms';

export class CustomValidators {

  static requiredString: ValidatorFn = Validators.compose([
    Validators.required,
    (field: FormControl): ValidationErrors | null => field.value.trim().length === 0 ? { required: true } : null,
  ]);

  static checkPasswords = (group: AbstractControl): ValidationErrors | null => {
    const password = group.get('password').value;
    const confirmPassword = group.get('confirmPassword').value;
    return password === confirmPassword ? null : { notSame: true };
  };

}
