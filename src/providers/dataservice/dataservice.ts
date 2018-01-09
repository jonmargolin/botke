
import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders, HttpParams } from '@angular/common/http';
//import {Http,Headers,RequestOptions} from '@angular/http';
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
  getwit()
  {
    return new Promise(resolve => {
    this.http.get('https://api.wit.ai/message?q=מבחן',{
      params: new HttpParams().set('access_token','OLOZJWSUHECG3KKUQQZQ45DJ2WJ6L36L')
 
    }).subscribe(data => {
      resolve(data);
    }, err => {
      console.log(err);
    });
  });
    
/*
  let headers = new Headers({ 'access_token':'OLOZJWSUHECG3KKUQQZQ45DJ2WJ6L36L' });
    const options = new RequestOptions({headers: headers});

    return this.http.get('https://api.wit.ai/message?v=20160207?q=מבחן',options)
 //  return this.http.get('http://localhost/witboot/wit_config')
    .map(res => res.json());*/
  }
}
