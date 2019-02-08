import { NgModule } from '@angular/core';
import {
  PanelModule,
  TabViewModule,
  AccordionModule,
  ButtonModule,
  AutoCompleteModule,
  TooltipModule,
  InputTextModule,
  CalendarModule,
  RadioButtonModule,
  DropdownModule,
  PaginatorModule,
  OverlayPanelModule,
  MultiSelectModule,
  ListboxModule,
  FileUploadModule,
  DialogModule,
  CheckboxModule,
  InputMaskModule,
  DataTableModule,
  SharedModule,
  ConfirmDialogModule,
  ProgressSpinnerModule
} from 'primeng/primeng';

import { FieldsetModule } from 'primeng/components/fieldset/fieldset';

import {TableModule} from 'primeng/table';

@NgModule({
  imports: [
    PanelModule,
    TabViewModule,
    AccordionModule,
    ButtonModule,
    AutoCompleteModule,
    TooltipModule,
    InputTextModule,
    CalendarModule,
    RadioButtonModule,
    DropdownModule,
    OverlayPanelModule,
    PaginatorModule,
    MultiSelectModule,
    ListboxModule,
    FileUploadModule,
    DialogModule,
    CheckboxModule,
    InputMaskModule,
    DataTableModule,
    SharedModule,
    FieldsetModule,
    ConfirmDialogModule,
    TableModule,
    ProgressSpinnerModule
  ],
  exports: [
    PanelModule,
    TabViewModule,
    AccordionModule,
    ButtonModule,
    AutoCompleteModule,
    TooltipModule,
    InputTextModule,
    CalendarModule,
    RadioButtonModule,
    DropdownModule,
    OverlayPanelModule,
    PaginatorModule,
    MultiSelectModule,
    ListboxModule,
    FileUploadModule,
    DialogModule,
    CheckboxModule,
    InputMaskModule,
    DataTableModule,
    SharedModule,
    FieldsetModule,
    ConfirmDialogModule,
    TableModule,
    ProgressSpinnerModule
  ]
})

export class AppPrimeNgComponentsModule { }
