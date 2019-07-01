import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable()
export class SubjectNotifyService {
  private subject = new Subject<string>();
  private data$ = this.subject.asObservable();

  constructor() {
    const a = 1;
  }

  getChannel(): Observable<string> {
    return this.data$;
  }

  sendMessage(message: string) {
    this.subject.next(message);
  }

}
