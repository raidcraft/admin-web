import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './layout/navigation/navigation.component';
import {
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule
} from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { NgxsModule } from '@ngxs/store';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CoreModule, AuthService } from '@faldoria/core';
import { JwtModule, JWT_OPTIONS } from '@auth0/angular-jwt';
import { HomeComponent } from './layout/home/home.component';
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';
import { AkitaNgRouterStoreModule } from '@datorama/akita-ng-router-store';

export function jwtOptionsFactory(auth: AuthService) {
  return {
    tokenGetter: () => {
      return auth.getToken();
    },
    whitelistedDomains: ['localhost:3000', 'localhost:4200', 'api.faldoria.de', 'faldoria.de']
  }
}

import { enableAkitaProdMode } from '@datorama/akita';
import { environment } from '@faldoria/env';

if (environment.production) {
  enableAkitaProdMode();
}

@NgModule({
  declarations: [AppComponent, NavigationComponent, HomeComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    HttpClientModule,
    JwtModule.forRoot({
      jwtOptionsProvider: {
        provide: JWT_OPTIONS,
        useFactory: jwtOptionsFactory,
        deps: [AuthService]
      }
    }),
    NgxsModule.forRoot([]),
    AkitaNgDevtools.forRoot(),
    AkitaNgRouterStoreModule.forRoot(),
    CoreModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
