import { Component } from '@angular/core';
import { GetimeProvider } from './../../providers/getime/getime';
/**
 * Generated class for the ChatComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'chat',
  templateUrl: 'chat.html'
})
export class ChatComponent {

  text: string;
greting:string;
  constructor(private gettime:GetimeProvider) {
    console.log('Hello ChatComponent Component');
    this.text = 'Hello World';
    this.greting=gettime.settime();      
  }


}
