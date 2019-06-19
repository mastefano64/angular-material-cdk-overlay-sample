import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-overlaypanelbtn',
  templateUrl: './overlaypanelout.component.html',
  styleUrls: ['./overlaypanelout.component.css']
})
export class OverlayPanelOutComponent {
  @Input() text: string;
  isopen = false;

  constructor() { }

  onSelected(args: string) {

  }

  onOpenClose() {
    this.isopen = !this.isopen;
  }

}
