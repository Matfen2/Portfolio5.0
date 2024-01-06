import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCardEffect]',
})
export class CardEffectDirective {
  constructor(private el: ElementRef) {
    this.opacity('1.0');
    this.scale('1.0');
  }

  private opacity(show: string) {
    this.el.nativeElement.style.opacity = show;
  }

  private scale(up: string) {
    this.el.nativeElement.style.scale = up;
  }

  @HostListener ('mouseenter') onMouseEnter() {
    this.scale('1.1');
    this.opacity('1.0');
  }

  @HostListener ('mouseleave') onMouseLeave() {
    this.scale('1.0');
    this.opacity('0.8');
  }
}
