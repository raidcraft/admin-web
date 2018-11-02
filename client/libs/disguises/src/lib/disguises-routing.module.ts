import { RouterModule, Route } from "@angular/router";
import { NgModule } from "@angular/core";
import { DisguisesComponent } from "./pages";

export const routes: Route[] = [
  { path: '', component: DisguisesComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DisguisesRoutingModule { }
