import { Component } from '@angular/core';
import { DataserviceProvider } from './../../providers/dataservice/dataservice';


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

  constructor( private dataserviceProvider : DataserviceProvider ) {
   
  }
  sendinput()
  {
 let test=   this.dataserviceProvider.getwit()
   console.log(test);
    
  }
}
