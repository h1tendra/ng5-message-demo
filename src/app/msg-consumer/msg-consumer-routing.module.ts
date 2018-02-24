import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MsgConsumerComponent} from './msg-consumer.component';

const routes: Routes = [
  {path: '', component: MsgConsumerComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MsgConsumerRoutingModule {
}
