import { Component, OnInit, OnDestroy } from '@angular/core';

import { SubjectNotifyService } from 'src/app/service/SubjectNotify.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-pagesubject',
  templateUrl: './pagesubject.component.html',
  styleUrls: ['./pagesubject.component.css']
})
export class PageSubjectComponent implements OnInit, OnDestroy {
  field: string;
  message: string;
  sup: Subscription;

  constructor(private service: SubjectNotifyService) {
    this.message = '?';
  }

  ngOnInit() {
    this.sup = this.service.getChannel().subscribe(data =>
      this.message = data
    );
  }

  onSendMessage() {
    this.service.sendMessage(this.field);
  }

  ngOnDestroy() {
    if (this.sup) {
      this.sup.unsubscribe();
    }
  }

}
