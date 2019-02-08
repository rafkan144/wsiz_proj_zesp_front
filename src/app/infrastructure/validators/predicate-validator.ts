import { AbstractControl } from '@angular/forms';
import { ValidatorFn } from '@angular/forms/src/directives/validators';

export function predicateValidator(predicate: (any: any) =>  { [key: string]: any; }): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any; } => {
     return predicate (control.value);
  };
}
