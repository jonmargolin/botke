import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { BootcontinerComponent } from './../components/bootcontiner/bootcontiner';
import { ChatComponent } from './../components/chat/chat';
import { UseinputComponent } from './../components/useinput/useinput';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { TabsPage } from '../pages/tabs/tabs';
import { HttpClientModule } from '@angular/common/http';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { GetimeProvider } from '../providers/getime/getime';
import { DataserviceProvider } from '../providers/dataservice/dataservice';
import { IntentProvider } from '../providers/intent/intent';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    ChatComponent,
    UseinputComponent,
    BootcontinerComponent
 
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    LoginPage,
    ChatComponent,
    TabsPage,
  
  ],
  providers: [
    StatusBar,
    SplashScreen,
    GetimeProvider,
    DataserviceProvider,
    IntentProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
 
  

  ]
})
export class AppModule {}
