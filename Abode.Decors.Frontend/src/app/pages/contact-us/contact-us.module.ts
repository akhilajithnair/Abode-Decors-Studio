import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { ContactUsRoutingModule } from "./contact-us-routing.module";
import { ContactUsComponent } from "./contact-us.component";

@NgModule({
    imports: [ContactUsRoutingModule],
    declarations: [ContactUsComponent],
    exports: [ContactUsComponent],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class ContactUsModule {}