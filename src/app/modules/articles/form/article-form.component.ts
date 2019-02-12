import { Component, Injector, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { CommonService } from '../../../services/common.service';
import { ConstsService } from '../../../services/consts.service';
import { ArticleDataContextService } from '../../../services/data-contexts/article-data-context.service';
import { BaseComponent } from '../../base-component';

@Component({
  selector: 'article-form',
  templateUrl: './article-form.component.html',
  styleUrls: ['./article-form.component.css']
})
export class ArticleFormComponent extends BaseComponent<App.Models.ArticleVm> implements OnInit {

  @ViewChild('mainForm')
  protected mainForm: NgForm;

  public dateTimeFormat: string;


  constructor(injector: Injector,
    dataContextService: ArticleDataContextService,
    private router: Router,
    private route: ActivatedRoute,
    private commonService: CommonService,
    private constsService: ConstsService) {
      super(injector, dataContextService);
      this.dateTimeFormat = constsService.displayFormats.dateTimeFormat;
    }

  ngOnInit(): void {
    const formMode = this.commonService.getFormModeFromRoute(this.route);

    if (formMode !== 'create') {
      const id = this.getIdFromRoute();

      this.dataContextService.get(Number(id)).subscribe(result => this.model = result);
    }
  }

  private getIdFromRoute(): string {
    const routeParam = this.route.snapshot.params['id'];
    return routeParam.toLocaleLowerCase();
  }

  public updateValidityOnFormGroups = (): void => {
    Object.keys(this.mainForm.form.controls).forEach(key => {
      this.mainForm.form.controls[key].updateValueAndValidity();
    });
  }

  public save = (): void => {
    if (!this.model) {
      return;
    }

    this.updateValidityOnFormGroups();

    const saveFunction = this.model.id > 0
      ? this.dataContextService.edit
      : this.dataContextService.create;

      if (this.mainForm.valid) {
        saveFunction(this.model).subscribe(x => {
          this.notifySuccessSave();
          this.router.navigateByUrl('/');
        });
    } else {
      console.error('Walidacja nie przeszła');
      console.log(this.mainForm);
      this.notifyInvalidForm();
    }
  }
}
