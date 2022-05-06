import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { LandingPageComponent } from "./landing-page.component";

@NgModule({
    declarations: [LandingPageComponent],
    exports: [LandingPageComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LandingPageModule {}
