import { RouterModule, Route } from "@angular/router";
import { NgModule } from "@angular/core";
import { ArtComponent } from "./pages";

export const routes: Route[] = [
  { path: '', component: ArtComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArtRoutingModule { }
