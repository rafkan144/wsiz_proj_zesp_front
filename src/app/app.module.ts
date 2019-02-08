import { CommonModule, DecimalPipe, registerLocaleData } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import localePlExtra from '@angular/common/locales/extra/pl';
import localePl from '@angular/common/locales/pl';
import { LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastModule } from 'ng2-toastr/ng2-toastr';
import { CookieService } from 'ngx-cookie-service';

import { AppPrimeNgComponentsModule } from './app-primeng-components-module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FBusyBackdropComponent } from './components/f-busy/f-busy-backdrop/f-busy-backdrop.component';
import { FBusyComponent } from './components/f-busy/f-busy.component';
import { FBusyDirective } from './components/f-busy/f-busy.directive';
import { HttpInterceptorService } from './infrastructure/interceptors/http-interceptor.service';
import { MaxLengthPipe } from './infrastructure/pipes/max-length.pipe';
import { PossibleNoDataPipe } from './infrastructure/pipes/possible-no-data.pipe';
import { CustomValidatorDirective } from './infrastructure/validators/custom-validator.directive';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { AboutComponent } from './modules/about/about.component';
import { ArticlesComponent } from './modules/articles/articles.component';
import { ArticleFormComponent } from './modules/articles/form/article-form.component';
import { ArticlesListComponent } from './modules/articles/list/articles-list.component';
import { AddTokenHttpInterceptor } from './modules/auth/add-token-http-interceptor';
import { LoginFormComponent } from './modules/auth/login-page/login-form/login-form.component';
import { LoginPageComponent } from './modules/auth/login-page/login-page.component';
import { RegisterFormComponent } from './modules/auth/register-page/register-form/register-form.component';
import { RegisterPageComponent } from './modules/auth/register-page/register-page.component';
import { AuthGuard } from './modules/auth/services/auth-guard.service';
import { AuthService } from './modules/auth/services/auth.service';
import { HomeComponent } from './modules/home/home.component';
import { NotFoundComponent } from './modules/not-found/not-found.component';
import { PermissionDeniedComponent } from './modules/permission-denied/permission-denied.component';
import { CommonConfigsService } from './services/common-configs.service';
import { CommonService } from './services/common.service';
import { ConstsService } from './services/consts.service';
import { ArticleDataContextService } from './services/data-contexts/article-data-context.service';
import { SpinnerService } from './services/spinner.service';

registerLocaleData(localePl, 'pl-PL', localePlExtra);
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    PermissionDeniedComponent,
    NotFoundComponent,
    ArticlesComponent,
    ArticlesListComponent,
    ArticleFormComponent,
    CustomValidatorDirective,
    MaxLengthPipe,
    PossibleNoDataPipe,
    ArticlesListComponent,
    ArticleFormComponent,
    FBusyComponent,
    FBusyBackdropComponent,
    FBusyDirective,
    RegisterPageComponent,
    RegisterFormComponent,
    LoginPageComponent,
    LoginFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ToastModule.forRoot(),
    HttpClientModule,
    AppPrimeNgComponentsModule
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'pl-PL'
    },
    { provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AddTokenHttpInterceptor,
      multi: true,
    },
    ConstsService,
    CommonService,
    CommonConfigsService,
    DecimalPipe,
    ArticleDataContextService,
    SpinnerService,
    CookieService,
    AuthService,
    AuthGuard
  ],
  entryComponents: [ FBusyComponent, FBusyBackdropComponent],
  bootstrap: [AppComponent]
})

export class AppModule {}
