import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { AcercaDeComponent } from './componentes/acerca-de/acerca-de.component';

import { LoginComponent } from './componentes/login/login.component';

import { LoginVentanaComponent } from './componentes/login-ventana/login-ventana.component';
import { AcercadeTextoComponent } from './componentes/acercade-texto/acercade-texto.component';
import { AcercadeImagenComponent } from './componentes/acercade-imagen/acercade-imagen.component';
import { HeaderLogoapComponent } from './componentes/header-logoap/header-logoap.component';
import { HeaderBannerComponent } from './componentes/header-banner/header-banner.component';
import { HeaderRedesComponent } from './componentes/header-redes/header-redes.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AcercaDeComponent,

    LoginComponent,

    LoginVentanaComponent,
    AcercadeTextoComponent,
    AcercadeImagenComponent,
    HeaderLogoapComponent,
    HeaderBannerComponent,
    HeaderRedesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[LoginVentanaComponent]
})
export class AppModule { }
