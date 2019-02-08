import { Injectable } from '@angular/core';

@Injectable()
export class SpinnerService {

  private httpRequestInstanceCount = 0;

  public decrementRequestCount(): void {
    this.httpRequestInstanceCount--;
  }
  public incrementRequestCount(): void {
    this.httpRequestInstanceCount++;
  }

  public showSpinner(): boolean {
    return this.httpRequestInstanceCount > 0;
  }

  constructor() { }

}
