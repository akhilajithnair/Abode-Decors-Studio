import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { PartnersComponent } from "./partners.component";

@NgModule({
    declarations: [PartnersComponent],
    exports: [PartnersComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PartnersModule {}