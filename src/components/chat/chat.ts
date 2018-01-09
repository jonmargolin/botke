import { Component , Input} from '@angular/core';
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
  @Input() text:any;
greting:string;
  constructor(private gettime:GetimeProvider) {
    this.greting=gettime.settime();
this.text=this.greting+"? מה שלומך"      
  }


}
