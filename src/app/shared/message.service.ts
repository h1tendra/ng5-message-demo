import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Message} from './message';

@Injectable()
export class MessageService {

  constructor(private http: HttpClient) {
  }

  public getMessage(type?: string): Observable<Message> {
    if (!type) {
      type = 'text';
    }

    return this.http.get<Message>(`assets/api/message-${type}.json`);
  }

  public isMsgExpired(msg: Message): boolean {
    const expireDate = new Date(msg.expires_at);
    const now = new Date();
    const expiresInSecs = expireDate.getTime() - now.getTime();

    return expiresInSecs <= 0;
  }
}
