import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { ProgramasPage } from '../pages/programas/programas';
import { SintonizarPage } from '../pages/sintonizar/sintonizar';
import { SobrePage } from '../pages/sobre/sobre';
import { ContatoPage } from '../pages/contato/contato';

import { TvabertaPage } from '../pages/tvaberta/tvaberta';
import { TvassinaturaPage } from '../pages/tvassinatura/tvassinatura';
import { TvparabolicaPage } from '../pages/tvparabolica/tvparabolica';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    ProgramasPage,
    SintonizarPage,
    SobrePage,
    ContatoPage,
    TvabertaPage,
    TvassinaturaPage,
    TvparabolicaPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    ProgramasPage,
    SintonizarPage,
    SobrePage,
    ContatoPage,
    TvabertaPage,
    TvassinaturaPage,
    TvparabolicaPage    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
