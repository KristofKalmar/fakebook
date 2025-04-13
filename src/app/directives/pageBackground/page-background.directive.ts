import {Directive, ElementRef, inject} from '@angular/core';
import server from '../../../server_mock/server';

@Directive({
  selector: '[appPageBackground]'
})
export class PageBackgroundDirective {
  private el = inject(ElementRef);

  constructor() {

    this.el.nativeElement.style.background = "linear-gradient(#01BAEF, #FFF)";
    this.el.nativeElement.style.backgroundSize = "cover";
    this.el.nativeElement.style.position = "fixed";
    this.el.nativeElement.style.top = "0px";
    this.el.nativeElement.style.width = "100%";
    this.el.nativeElement.style.height = "100%";
    this.el.nativeElement.style.filter = "blur(10px)";
  }

}
