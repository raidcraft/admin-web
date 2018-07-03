import { RouterModule, Route } from "@angular/router";
import { NgModule } from "@angular/core";
import { HomeComponent } from "./components";
import { AuthGuard, ScopeGuard } from "@faldoria/core";

export const routes: Route[] = [
  { path: 'home', component: HomeComponent },
  {
    path: 'items',
    loadChildren: '../../../../libs/items/src/lib/items.module#ItemsModule',
    canActivate: [ScopeGuard],
    data: {
      scopes: ['read:items']
    }
  },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { initialNavigation: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
