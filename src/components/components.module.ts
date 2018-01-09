import { NgModule } from '@angular/core';
import { ChatComponent } from './chat/chat';
import { UseinputComponent } from './useinput/useinput';
import { BootcontinerComponent } from './bootcontiner/bootcontiner';
@NgModule({
	declarations: [ChatComponent,
    UseinputComponent,
    BootcontinerComponent],
	imports: [],
	exports: [ChatComponent,
    UseinputComponent,
    BootcontinerComponent]
})
export class ComponentsModule {}
