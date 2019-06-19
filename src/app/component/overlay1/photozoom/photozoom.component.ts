import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-photo-zoom',
  templateUrl: './photozoom.component.html',
  styleUrls: ['./photozoom.component.css']
})
export class PhotoZoomComponent implements OnDestroy {
  actionclose;
  photo = '';

  constructor() { }

  onCloseZoom() {
    this.actionclose();
  }

  ngOnDestroy() {
    this.actionclose = undefined;
    this.photo = undefined;
  }
}
