import { Component, OnInit } from '@angular/core';

import { ConstsService } from '../../services/consts.service';
import { ArticleDataContextService } from '../../services/data-contexts/article-data-context.service';
import { AuthService } from '../auth/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  articles: App.Models.ArticleVm[] = [];

  constructor(
    private articleDataContext: ArticleDataContextService,
    public constsService: ConstsService,
    public authService: AuthService) {}

  ngOnInit() {
    this.getFiveArticles();
  }

  getFiveArticles(): void {
    this.articleDataContext.getAll()
      .subscribe(articles => this.articles = articles.slice(0, 4));
  }

}
