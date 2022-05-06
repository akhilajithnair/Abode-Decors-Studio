import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ContactUsComponent } from "./contact-us.component";

const route = [{
    path: '',
    component: ContactUsComponent
}];

@NgModule({
    imports: [RouterModule.forChild(route)],
    exports: [RouterModule]
})
export class ContactUsRoutingModule {}