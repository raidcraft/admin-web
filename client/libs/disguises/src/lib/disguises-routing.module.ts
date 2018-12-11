import { RouterModule, Route } from "@angular/router";
import { NgModule } from "@angular/core";
import { DisguisesComponent, ViewDisguiseComponent, EditDisguiseComponent, DisguiseResolver } from "./pages";

export const routes: Route[] = [
  {
    path: '',
    component: DisguisesComponent,
    pathMatch: 'full'
  },
  {
    path: ':id',
    component: ViewDisguiseComponent,
    resolve: {
      disguise: DisguiseResolver
    }
  },
  {
    path: 'edit/:id',
    component: EditDisguiseComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DisguisesRoutingModule { }
