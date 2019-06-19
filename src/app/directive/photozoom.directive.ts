import { Directive, ComponentRef, ElementRef, HostListener, OnInit } from '@angular/core';
import { Overlay, OverlayRef} from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';

import { PhotoZoomComponent } from '../component/overlay1/photozoom/photozoom.component';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[photozoom]'
})
export class PhotoZoomDirective implements OnInit {
  overlayRef: OverlayRef;
  componentRef: ComponentRef<PhotoZoomComponent>;
  fnCloseZoom: any;
  image: string;

  constructor(private element: ElementRef, private overlay: Overlay) { }

  ngOnInit() {
    this.fnCloseZoom = this.onCloseZoom.bind(this);
    this.image = this.element.nativeElement.src;
  }

  @HostListener('click') onOpenZoom() {
    this.overlayRef = this.overlay.create();
    const portal = new ComponentPortal(PhotoZoomComponent);
    this.componentRef = this.overlayRef.attach(portal);
    this.componentRef.instance.actionclose = this.fnCloseZoom;
    this.componentRef.instance.photo = this.image;
  }

  onCloseZoom() {
    if (this.overlayRef && this.componentRef) {
      this.overlayRef.detach();
      this.componentRef = undefined;
      this.overlayRef = undefined;
    }
  }
}
