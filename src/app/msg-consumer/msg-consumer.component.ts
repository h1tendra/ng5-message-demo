import {Component, OnDestroy, OnInit} from '@angular/core';
import {MessageService} from '../shared/message.service';
import {TimerObservable} from 'rxjs/observable/TimerObservable';
import {Subscription} from 'rxjs/Subscription';
import {Message} from '../shared/message';
import {config} from '../app.config';

@Component({
  selector: 'app-msg-consumer',
  templateUrl: './msg-consumer.component.html',
  styleUrls: ['./msg-consumer.component.scss']
})
export class MsgConsumerComponent implements OnInit, OnDestroy {
  private audio = new Audio(`${config.API_ENDPOINT}/message.wav`); // load audio to play
  private interval: number;
  private msgSubscription: Subscription;
  public messages: Message[] = [];
  protected msgTypes: string[] = ['text', 'image'];
  public loadInProgress = true;

  constructor(private messageService: MessageService) {
    this.interval = config.POLLING_INTERVAL;

    if (config.OVERRIDE_SERVER_EXPIRE_TIME) {
      console.log('OVERRIDE_SERVER_EXPIRE_TIME is active, change value to `false` in app.config.ts file to disable!');
    }
  }

  ngOnInit() {
    this.startMsgPolling();
  }

  ngOnDestroy() {
    // stop polling if component gets destroyed
    this.msgSubscription.unsubscribe();
  }

  protected startMsgPolling() {
    // create timer for message polling
    this.msgSubscription = TimerObservable.create(0, this.interval).subscribe(() => {
      this.getMessage();
    });
  }

  protected getMessage() {
    // generate random message type
    const msgType = this.msgTypes[Math.floor(Math.random() * this.msgTypes.length)];

    this.messageService.getMessage(msgType).subscribe((msg: Message) => {
      this.loadInProgress = false;
      if (msg) {
        if (config.OVERRIDE_SERVER_EXPIRE_TIME) { // for demo purpose (modify config file to disable)
          const now = new Date();
          msg.expires_at = (new Date(now.getTime() + 1000 * 30)).toISOString();
        }
        // add message into collection if it's not expired
        if (!this.messageService.isMsgExpired(msg)) {
          this.messages.push(msg);
          this.audio.play();
        }
      }
    }, err => {
      this.loadInProgress = false;
    });
  }

  protected onMsgExpire(id: number) {
    // removes message from list by index
    this.messages.splice(id, 1);
  }

}
