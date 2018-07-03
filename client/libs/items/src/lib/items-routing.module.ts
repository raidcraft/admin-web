import { RouterModule, Route } from "@angular/router";
import { NgModule } from "@angular/core";
import { ItemsComponent } from "./pages";

export const routes: Route[] = [
  { path: '', component: ItemsComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItemsRoutingModule { }