import {Directive, ElementRef, inject} from '@angular/core';

@Directive({
  selector: '[appLogoAnimation]'
})
export class LogoAnimationDirective {
  private el = inject(ElementRef);

  constructor() {

    this.el.nativeElement.style.position = 'fixed';
    this.el.nativeElement.style.top = '0px';
    this.el.nativeElement.style.left = '0px';
    this.el.nativeElement.style.width = '100vw';
    this.el.nativeElement.style.height = '100vh';
    this.el.nativeElement.style.backgroundColor = '#3F51B5';
    this.el.nativeElement.style.backgroundImage = 'url(/assets/images/logo_bg.png)';
    this.el.nativeElement.style.backgroundSize = '64px 64px';
    this.el.nativeElement.style.backgroundRepeat = 'repeat';
    this.el.nativeElement.style.animation = 'moveBackground 10s linear infinite';
  }

}
