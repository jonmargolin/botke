import { Injectable } from '@angular/core';

/*
  Generated class for the IntentProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class IntentProvider {
 msg: string;
  constructor() {
    console.log('Hello IntentProvider Provider');
  }
  getintent(data) {
 
if(data.entities.hasOwnProperty("introduction"))
  {
  this.msg="תרצה ללמוד למבחן";
  return this.msg;
  }
  }
}
