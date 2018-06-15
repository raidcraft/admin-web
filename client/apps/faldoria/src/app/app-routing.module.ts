import { RouterModule, Route } from "@angular/router";
import { NgModule } from "@angular/core";

export const routes: Route[] = [
  { path: 'items', loadChildren: '../../../../libs/items/src/lib/items.module#ItemsModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { initialNavigation: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
