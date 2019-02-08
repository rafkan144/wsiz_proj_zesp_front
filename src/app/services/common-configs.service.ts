import { Injectable } from '@angular/core';

import { environment } from '../../environments/environment';

@Injectable()
export class CommonConfigsService {

  public apiSiteAddress = environment.apiSiteAddress;

  public apiOptions = {
    withCredentials: false
  };

  public getApiAddress = (addr: string): string => {
      return this.apiSiteAddress + addr;
  }

}
