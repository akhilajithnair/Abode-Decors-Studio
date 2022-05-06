import { NgModule } from "@angular/core";
import { ContactUsModule } from "./contact-us/contact-us.module";
import { LandingPageModule } from "./landing-page/landing-page.module";
import { PartnersModule } from "./partners/partners.module";

@NgModule({
    declarations: [],
    imports: [],
    exports: [ContactUsModule, LandingPageModule, PartnersModule]
})
export class PagesModule {}
