import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { LandingPageComponent } from "./landing-page.component";

const route = [{
    path: '',
    component: LandingPageComponent
}]

@NgModule({
    imports: [
        RouterModule.forChild(route)
    ],
    exports: [  
        RouterModule  
    ] 
})
export class LandingPageRoutingModule {}