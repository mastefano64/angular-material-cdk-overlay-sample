import { Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-overlaypanelhover',
  templateUrl: './overlaypanelin.component.html',
  styleUrls: ['./overlaypanelin.component.css']
})
export class OverlayPanelInComponent {
  @Input() text: string;
  @Output() select = new EventEmitter<string>();

  constructor() {}

  onSelect() {
    this.select.emit(this.text);
  }

}
