import { ChatComponent } from './../../components/chat/chat';
import { Component,ViewChild, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';

/**
 * Generated class for the BootcontinerComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'bootcontiner',
  templateUrl: 'bootcontiner.html'
})
export class BootcontinerComponent {
  @ViewChild('chatContiner', {read: ViewContainerRef}) chatContiner: ViewContainerRef;
  constructor(private componentFactoryResolver: ComponentFactoryResolver) {
    console.log();

  }
  
  addcomponent(msg){
    const childComponent_var = this.componentFactoryResolver.resolveComponentFactory(ChatComponent);    
    let ref = this.chatContiner.createComponent(childComponent_var);
    ref.instance.text=msg;
  }
}
