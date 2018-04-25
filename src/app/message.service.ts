import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class MessageService {

  messages:string[] = [];
  public add(message:string){
    this.messages.push(message)
  }

  clear(){
    this.messages = [];
  }
}
