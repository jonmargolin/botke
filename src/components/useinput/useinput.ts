import { Component } from '@angular/core';
import { DataserviceProvider } from './../../providers/dataservice/dataservice';
import { IntentProvider } from './../../providers/intent/intent';
import { BootcontinerComponent } from './../../components/bootcontiner/bootcontiner';

/**
 * Generated class for the UseinputComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'useinput',
  templateUrl: 'useinput.html'
})
export class UseinputComponent {
  input = {};
  apikey: string;
  a: any;
  constructor(private dataserviceProvider: DataserviceProvider,private intentProvider: IntentProvider,private boot: BootcontinerComponent) {
  }
  sendinput() {
    this.dataserviceProvider.getwit(this.input).then(data => {
      this.a = data;
let msg=this.intentProvider.getintent(this.a);
this.boot.addcomponent(msg);
    });
  }
}
