
import { Injectable } from '@angular/core';

/*
  Generated class for the GetimeProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GetimeProvider {

  constructor() {
    console.log('Hello GetimeProvider Provider');
  }
  settime() {
    let time= new Date();
    let ct=time.getHours();
    if (ct>12)
      {
        return "בוקר טוב";
      }

      else if(ct>=12&&ct<18)
        {
          return "צהורים טובים";
        }
        else if(ct>=18)
          {
            return "ערב טוב";
          }
    console.log(ct);
  }
}
