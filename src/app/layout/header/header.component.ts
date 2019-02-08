import { Component, OnInit } from '@angular/core';

import { ConstsService } from '../../services/consts.service';
import { AuthService } from '../../modules/auth/services/auth.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

    constructor(public constsService: ConstsService, public authService: AuthService) {}

    ngOnInit() {}
}
