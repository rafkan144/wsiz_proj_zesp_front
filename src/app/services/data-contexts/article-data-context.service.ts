import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { CommonConfigsService } from '../common-configs.service';

@Injectable()
export class ArticleDataContextService {

  constructor(
    private http: HttpClient,
    protected commonConfigsService: CommonConfigsService) {}

  getAll = (): Observable<App.Models.ArticleVm[]> => {
    return this.http.get<App.Models.ArticleVm[]>(
      this.commonConfigsService.getApiAddress(`/article`),
      this.commonConfigsService.apiOptions
    );
  }

  get(id: number): Observable<App.Models.ArticleVm> {
    return this.http.get<App.Models.ArticleVm>(
      this.commonConfigsService.getApiAddress(`/article/${id}`),
      this.commonConfigsService.apiOptions,
    );
  }

  create = (model: App.Models.ArticleVm) => {
    return this.http.post<App.Models.ArticleVm>(
      this.commonConfigsService.getApiAddress('/article'),
      model,
      this.commonConfigsService.apiOptions
    );
  }

  edit = (model: App.Models.ArticleVm) => {
    return this.http.put<App.Models.ArticleVm>(
      this.commonConfigsService.getApiAddress(`/article/${model.id}`),
      model,
      this.commonConfigsService.apiOptions
    );
  }

  delete = (id: number) => {
    return this.http.delete<App.Models.ArticleVm>(
      this.commonConfigsService.getApiAddress(`/article/${id}`),
      this.commonConfigsService.apiOptions
    );
  }

}
