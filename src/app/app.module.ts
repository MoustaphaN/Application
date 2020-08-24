import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { OperationsPage } from './operations/operations.page';
import { WalletPage } from './wallet/wallet.page';
import { CarteBancairePage } from './carte-bancaire/carte-bancaire.page';

@NgModule({
  declarations: [
    AppComponent,
    OperationsPage,
    WalletPage,
    CarteBancairePage
  ],
  entryComponents: [
    OperationsPage,
    WalletPage,
    CarteBancairePage
  ],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
