import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { PartnersRoutingModule } from "./partners-routing.module";
import { PartnersComponent } from "./partners.component";

@NgModule({
    imports: [PartnersRoutingModule],
    declarations: [PartnersComponent],
    exports: [PartnersComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PartnersModule {}