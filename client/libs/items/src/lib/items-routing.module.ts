import { RouterModule, Route } from "@angular/router";
import { NgModule } from "@angular/core";
import { ItemsComponent } from "./pages";
import { ItemWizardComponent } from "./components";

export const routes: Route[] = [
  { path: '', component: ItemsComponent },
  { path: 'wizard', component: ItemWizardComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItemsRoutingModule { }
