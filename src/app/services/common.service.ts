import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Injectable()
export class CommonService {

  public getFormModeFromRoute(route: ActivatedRoute): string {
    const routeParam: string = route.snapshot.data['formMode'];

    if (routeParam) {
      switch (routeParam.toLocaleLowerCase()) {
        case 'create':
          return 'create';
        case 'edit':
          return 'edit';
        case 'view':
          return 'view';
        case 'delete':
          return 'delete';
      }
    }
  }

}
