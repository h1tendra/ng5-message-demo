import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MsgConsumerRoutingModule} from './msg-consumer-routing.module';
import {MsgConsumerComponent} from './msg-consumer.component';
import {MsgPresenterComponent} from './msg-presenter/msg-presenter.component';

@NgModule({
  imports: [
    CommonModule,
    MsgConsumerRoutingModule
  ],
  declarations: [MsgConsumerComponent, MsgPresenterComponent]
})
export class MsgConsumerModule {
}
