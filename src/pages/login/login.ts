import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from './../../pages/home/home';
import { DataserviceProvider } from './../../providers/dataservice/dataservice';


/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
user={};
islogin: any;
  constructor(public navCtrl: NavController, public navParams: NavParams,private dataserviceProvider:DataserviceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  login()
{
this.dataserviceProvider.getlogin(this.user).then(data=>{
  this.islogin=data;
  if(this.islogin.results.length>0)   
//if(data.hasOwnProperty("results"))
  {
    this.navCtrl.setRoot(HomePage);
  }

});
 
}
}
