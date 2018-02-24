import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Message} from '../../shared/message';

@Component({
  selector: 'app-msg-presenter',
  templateUrl: './msg-presenter.component.html',
  styleUrls: ['./msg-presenter.component.css']
})
export class MsgPresenterComponent implements OnInit {
  @Input() message: Message;
  @Input() id: number;
  @Output() msgExpired: EventEmitter<number>;
  public display = false;

  constructor() {
    this.msgExpired = new EventEmitter<number>();
  }

  ngOnInit() {
    this.calculateExpireTime();
  }

  calculateExpireTime() {
    const expireDate = new Date(this.message.expires_at);
    const now = new Date();
    const expiresInSecs = expireDate.getTime() - now.getTime();

    if (expiresInSecs > 0) {
      this.display = true;
      setTimeout(() => {
        this.msgExpired.emit(this.id);
      }, expiresInSecs);
    } else {
      this.msgExpired.emit(this.id);
    }
  }

}
