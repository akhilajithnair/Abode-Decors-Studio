import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { NavBarComponent } from "./nav-bar.component";

@NgModule({
    declarations: [ NavBarComponent ],
    imports: [], 
    providers: [],
    exports: [ NavBarComponent ],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
    bootstrap: [ NavBarComponent ]
})
export class NavBarModule {
}