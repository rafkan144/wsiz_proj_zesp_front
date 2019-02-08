import { NgModule } from '@angular/core';
import { DefaultUrlSerializer, RouterModule, Routes, UrlTree } from '@angular/router';

import { AboutComponent } from './modules/about/about.component';
import { ArticlesComponent } from './modules/articles/articles.component';
import { ArticleFormComponent } from './modules/articles/form/article-form.component';
import { HomeComponent } from './modules/home/home.component';
import { NotFoundComponent } from './modules/not-found/not-found.component';
import { PermissionDeniedComponent } from './modules/permission-denied/permission-denied.component';
import { LoginPageComponent } from './modules/auth/login-page/login-page.component';
import { RegisterPageComponent } from './modules/auth/register-page/register-page.component';
import { AuthGuard } from './modules/auth/services/auth-guard.service';

export class LowerCaseUrlSerializer extends DefaultUrlSerializer {
  parse(url: string): UrlTree {
    return super.parse(url.toLowerCase());
  }
}

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '#', redirectTo: '/home', pathMatch: 'full'},

  {
    path: '',
    component: HomeComponent,
    children: []
  },
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'auth/login', component: LoginPageComponent},
  {path: 'auth/register', component: RegisterPageComponent},
  {path: 'articles', component: ArticlesComponent, canActivate: [AuthGuard]},
  {path: 'article/create', component: ArticleFormComponent, canActivate: [AuthGuard], data: {
    formMode: 'create'
  }},
  {path: 'article/edit/:id', component: ArticleFormComponent, canActivate: [AuthGuard], data: {
    formMode: 'edit'
  }},
  {path: '404', component: NotFoundComponent},
  {path: '401', component: PermissionDeniedComponent},
  {path: '**', redirectTo: '/404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
