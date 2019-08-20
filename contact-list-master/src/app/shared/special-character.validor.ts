import { AbstractControl, ValidatorFn } from '@angular/forms';

export class SpecialCharacterValidators {

  static specialCharacter(): ValidatorFn {
    return (c: AbstractControl): { [key: string]: boolean } | null => {
      const regExpr = new RegExp(/[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/);
      if (c.value && regExpr.test(c.value)) {
        return { 'number': true };
      }
      return null;
    };
  }
}
