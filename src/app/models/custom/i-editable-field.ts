import { AbstractControl } from '@angular/forms';

/* Interfejs obiektów przechowujących informacje o polu formularza - porządkuje logikę związaną z jego stanem i wyglądem */
export interface IEditableField {
    visible: () => boolean;
    editable: () => boolean;
    required: () => boolean;
    hasError: () => boolean;
    validationInfo: () => string;
    disabled: () => boolean;
    name: string;
    customValidators?: Array<(c: AbstractControl) => { [key: string]: any; }>;
    validationEnabled: () => boolean;
}
