import { Component, OnInit } from '@angular/core';
import { ToastsManager } from 'ng2-toastr/src/toast-manager';

import { ConstsService } from '../../../services/consts.service';
import { ArticleDataContextService } from '../../../services/data-contexts/article-data-context.service';

@Component({
  selector: 'articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.css']
})

export class ArticlesListComponent implements OnInit {

  articles: App.Models.ArticleVm[];

  constructor(public constsService: ConstsService,
    private dataContext: ArticleDataContextService,
    private toastr: ToastsManager) {}

  ngOnInit() {
    this.getAll();
  }

  getAll(): void {
    this.dataContext.getAll()
      .subscribe(articles => this.articles = articles);
  }

  create(title: string, body: string): void {
    title = title.trim();
    body = body.trim();

    if (!title && !body) { return; }

    const newArticle = <App.Models.ArticleVm> {
      title: title,
      body: body
    }

    this.dataContext.create(newArticle)
      .subscribe(() => {
        this.getAll();
      });
  }

  delete(article: App.Models.ArticleVm): void {
    this.articles = this.articles.filter(h => h !== article);
    this.dataContext.delete(article.id).subscribe(() =>
      this.toastr.warning('Usunieto!'));
  }
}
