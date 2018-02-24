import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Message} from './message';

@Injectable()
export class MessageService {

  constructor(private http: HttpClient) {
  }

  public getMessage(): Observable<Message> {
    return this.http.get<Message>('assets/api/message.json');
  }
}
