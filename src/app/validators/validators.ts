import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function matchValidator(shouldMatchCtrlName: string, matchWithCtrlName: string): ValidatorFn {
  return (formGroup: AbstractControl): ValidationErrors | null => {
    const ctrl = formGroup.get(shouldMatchCtrlName);
    const matchWithCtrl = formGroup.get(matchWithCtrlName);

    if (ctrl && matchWithCtrl && ctrl.value !== matchWithCtrl.value) {
      ctrl.setErrors({ mismatch: true });
    } else if (ctrl?.errors) {
      const { mismatch, ...otherError } = ctrl.errors;
      ctrl.setErrors(otherError);
    }
    return null;
  };
}
