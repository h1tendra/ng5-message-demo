import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MsgConsumerRoutingModule} from './msg-consumer-routing.module';
import {MsgConsumerComponent} from './msg-consumer.component';

@NgModule({
  imports: [
    CommonModule,
    MsgConsumerRoutingModule
  ],
  declarations: [MsgConsumerComponent]
})
export class MsgConsumerModule {
}
