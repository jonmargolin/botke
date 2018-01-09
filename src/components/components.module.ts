import { NgModule } from '@angular/core';
import { ChatComponent } from './chat/chat';
import { UseinputComponent } from './useinput/useinput';
@NgModule({
	declarations: [ChatComponent,
    UseinputComponent],
	imports: [],
	exports: [ChatComponent,
    UseinputComponent]
})
export class ComponentsModule {}
