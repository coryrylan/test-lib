import { Component, OnInit, HostBinding, HostListener } from '@angular/core';

@Component({
  selector: 'lib-demo-lib',
  template: `
    <p>
      demo-lib works!
    </p>
  `,
  styles: [
  ]
})
export class DemoLibComponent implements OnInit {
  constructor() { }

  @HostBinding('@expandAnimation')
  @HostListener('@expandAnimation.done')
  @HostBinding('@leaveAnimation')
  ngOnInit(): void {
  }
}
