import { RouterModule, Route } from "@angular/router";
import { NgModule } from "@angular/core";
import { AuthGuard, ScopeGuard } from "@faldoria/core";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./layout/home/home.component";

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
  {
    path: 'art',
    loadChildren: '../../../../libs/art/src/lib/art.module#ArtModule',
    canActivate: [ScopeGuard],
    data: {
      scopes: ['read:art']
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
