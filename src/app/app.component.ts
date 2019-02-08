import { Component, ViewContainerRef } from '@angular/core';
import { ToastsManager } from 'ng2-toastr/src/toast-manager';

import { ConstsService } from './services/consts.service';
import { SpinnerService } from './services/spinner.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  public loading = false;
  public errorWhileLoading = false;
  public location: Location;
  public currentUserName: string;

  constructor(
    private toastr: ToastsManager,
    public constsService: ConstsService,
    vcr: ViewContainerRef,
    public spinnerService: SpinnerService) {
    this.location = location;
    this.toastr.setRootViewContainerRef(vcr);
  }
}
