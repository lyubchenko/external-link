import { Directive, Input, Optional, OnInit, ElementRef, Renderer2 } from '@angular/core';
import { RouterLinkWithHref, Router } from '@angular/router';

@Directive({
  selector: '[appExternalLink]'
})
export class ExternalLinkDirective implements OnInit {
  @Input('appExternalLink') externalLink: string;
  @Input() isSubDomain: boolean;
  @Input() hostname: string;
  private url: string;

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2,
    private router: Router,
    @Optional() private link: RouterLinkWithHref
  ) {

    if (!link) {
      return;
    }
    const onClick = link.onClick;
    link.onClick = (...args: any[]) => {
      if ((this.isSubDomain || this.externalLink) && this.url ) {
        window.location.href = this.url;
        return false;
      } else {
        return onClick.apply(link, args);
      }
    };
  }

  ngOnInit() {
    this.createNewHref();
  }

  createNewHref(): void {
    setTimeout( () => {
      if (this.link && this.link.href && this.elementRef && this.elementRef.nativeElement) {
        if (this.isSubDomain && this.hostname) {
          this.link.href = 'https://' + this.hostname + this.link.href;
        } else {
          this.link.href = this.externalLink;
        }
        this.url = this.link.href;
        this.renderer.setAttribute(this.elementRef.nativeElement, 'href', this.link.href);
      }
    }, 0);
  }

}
