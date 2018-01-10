
import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders, HttpParams } from '@angular/common/http';

import 'rxjs/add/operator/map';
/*
  Generated class for the DataserviceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataserviceProvider {

  constructor(public http: HttpClient) {
    console.log('Hello RestServiceProvider Provider');
  }
  getwit( input)
  {
    console.log(input.title);
    return new Promise(resolve => {
    this.http.get('https://api.wit.ai/message?q='+input.title,{
      params: new HttpParams().set('access_token','OLOZJWSUHECG3KKUQQZQ45DJ2WJ6L36L')
    }).subscribe(data => {
      resolve(data);
    }, err => {
      console.log(err);
    });
  });
  }
  getlogin(user)
  {
    return new Promise(resolve => {
    this.http.get('http://localhost:63130/api/users/?password='+user.password,{
      params: new HttpParams().set('name',user.name)
    }).subscribe(data => {
      resolve(data);
    }, err => {
      console.log(err);
    });
  });
  }
}
