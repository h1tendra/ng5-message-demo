import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', loadChildren: 'app/msg-consumer/msg-consumer.module#MsgConsumerModule'},
  {path: '**', redirectTo: 'home'}, // global catch for un-matched routes
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes, {useHash: false})],
})

export class AppRoutingModule {
}
