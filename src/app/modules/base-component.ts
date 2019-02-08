import { Injector, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Toast } from 'ng2-toastr';
import { ToastsManager } from 'ng2-toastr/src/toast-manager';

import { ArticleDataContextService } from '../services/data-contexts/article-data-context.service';

export declare type FormMode = 'view' | 'create' | 'edit';

export class BaseComponent<T> implements OnInit {

  @ViewChild('mainForm')
  protected mainForm: NgForm;

  @Input()
  public formMode: FormMode;

  public model = <T> {};

  private toastr: ToastsManager;

  constructor(protected injector: Injector,
    // protected dataContextService: IBaseDataContextService<T>
    protected dataContextService: ArticleDataContextService) {
      this.toastr = injector.get(ToastsManager);
  }

  ngOnInit(): void {}

  notifyInvalidForm = (): Promise<Toast> => this.toastr.warning('Proszę poprawić błędy');

  notifySuccessSave = (): Promise<Toast> => this.toastr.success('Zapisano');

}
