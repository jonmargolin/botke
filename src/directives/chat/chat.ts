import { Directive } from '@angular/core';

/**
 * Generated class for the ChatDirective directive.
 *
 * See https://angular.io/api/core/Directive for more info on Angular
 * Directives.
 */
@Directive({
  selector: '[chat]' // Attribute selector
})
export class ChatDirective {

  constructor() {
    console.log('Hello ChatDirective Directive');
  }

}
