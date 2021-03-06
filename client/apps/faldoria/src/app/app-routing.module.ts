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
  {
    path: 'disguises',
    loadChildren: '../../../../libs/disguises/src/lib/disguises.module#DisguisesModule',
    canActivate: [ScopeGuard],
    data: {
      scopes: ['read:disguises']
    }
  },
  {
    path: 'tags',
    loadChildren: '../../../../libs/tags/src/lib/tags.module#TagsModule',
    canActivate: [ScopeGuard],
    data: {
      scopes: ['read:tags']
    }
  },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabled',
      paramsInheritanceStrategy: 'always',
      enableTracing: true
    })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
