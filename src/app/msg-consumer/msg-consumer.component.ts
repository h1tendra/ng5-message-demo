import {Component, OnDestroy, OnInit} from '@angular/core';
import {MessageService} from '../shared/message.service';
import {TimerObservable} from 'rxjs/observable/TimerObservable';
import {Subscription} from 'rxjs/Subscription';
import {Message} from '../shared/message';

@Component({
  selector: 'app-msg-consumer',
  templateUrl: './msg-consumer.component.html',
  styleUrls: ['./msg-consumer.component.css']
})
export class MsgConsumerComponent implements OnInit, OnDestroy {
  private interval: number;
  private msgSubscription: Subscription;
  public messages: Message[] = [];
  protected msgTypes: string[] = ['text', 'image'];

  constructor(private message: MessageService) {
    this.interval = 1000 * 3; // 3 seconds
  }

  ngOnInit() {
    this.startMsgPolling();
  }

  ngOnDestroy() {
    this.msgSubscription.unsubscribe();
  }

  protected startMsgPolling() {
    this.msgSubscription = TimerObservable.create(0, this.interval).subscribe(() => {
      this.getMessage();
    });
  }

  protected getMessage() {
    const msgType = this.msgTypes[Math.floor(Math.random() * this.msgTypes.length)];

    this.message.getMessage(msgType).subscribe((msg: Message) => {
      if (msg) {
        this.messages.push(msg);
      }
    });
  }

  protected onMsgExpire(id: number) {
    this.messages.splice(id, 1);
  }

}
