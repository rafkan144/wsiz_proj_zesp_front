import { Component, OnInit } from '@angular/core';
import { style, animate, trigger, transition } from '@angular/animations';

const inactiveStyle = style({
  opacity: 0,
});
const timing = '.3s ease';

@Component({
  selector: 'app-f-busy-backdrop',
  templateUrl: './f-busy-backdrop.component.html',
  styleUrls: ['./f-busy-backdrop.component.css'],
  animations: [
    trigger('fadeInOut', [
        transition('void => *', [
            inactiveStyle,
            animate(timing)
        ]),
        transition('* => void', [
            animate(timing, inactiveStyle)
        ])
    ])
]
})
export class FBusyBackdropComponent implements OnInit {

  public showBackdrop = false;

  constructor() {}

  ngOnInit(): void {
    setTimeout(() => {
      this.showBackdrop = true;
    }, 30);
  }

  public isActive(): boolean {
    return true;
  }
}
