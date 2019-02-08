import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator } from '@angular/forms';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[customValidator]',
  providers: [{ provide: NG_VALIDATORS, useExisting: CustomValidatorDirective, multi: true }]
})
export class CustomValidatorDirective implements Validator {
  @Input()
  customValidators: Array<(c: AbstractControl) => { [key: string]: any; }>;
  @Input()
  customValidationEnabled: () => boolean;

  validate(c: AbstractControl): { [key: string]: any; } {
    if (!this.customValidationEnabled() || !this.customValidators || this.customValidators.length === 0) {
      return null;
    }

    for (const validator of this.customValidators) {
      const result = validator(c);
      if (result !== null) {
        return result;
      }
    }

    return null;
  }

  constructor() {}

}
