import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { ContactUsComponent } from "./contact-us.component";

@NgModule({
    declarations: [ContactUsComponent],
    exports: [ContactUsComponent],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class ContactUsModule {}