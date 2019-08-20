import { AbstractControl, ValidatorFn } from '@angular/forms';

export class NumberValidators {

  static number(): ValidatorFn {
    return (c: AbstractControl): { [key: string]: boolean } | null => {
      const regExpr = new RegExp(/\d+/g);
      if (c.value && regExpr.test(c.value)) {
        return { 'number': true };
      }
      return null;
    };
  }
}
