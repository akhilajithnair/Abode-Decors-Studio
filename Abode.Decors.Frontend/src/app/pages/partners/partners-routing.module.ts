import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { PartnersComponent } from "./partners.component";

const route = [
    { path: '', component: PartnersComponent }
]

@NgModule({
    imports: [RouterModule.forChild(route)],
    exports: [RouterModule]
})
export class PartnersRoutingModule {}