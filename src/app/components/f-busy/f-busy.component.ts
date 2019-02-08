import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'f-busy',
  templateUrl: './f-busy.component.html',
  styleUrls: ['./f-busy.component.css']
})
export class FBusyComponent implements OnInit {

  public showSpinner = false;

  constructor() {}

  ngOnInit(): void {
    setTimeout(() => {
      this.showSpinner = true;
    }, 30);
  }
}
