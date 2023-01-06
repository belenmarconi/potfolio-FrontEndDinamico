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
import { ExperienciaLaboralComponent } from './componentes/experiencia-laboral/experiencia-laboral.component';
import { ExplabHistorialComponent } from './componentes/explab-historial/explab-historial.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { EducacionHistorialComponent } from './componentes/educacion-historial/educacion-historial.component';
import { SkillsComponent } from './componentes/skills/skills.component';

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
    HeaderRedesComponent,
    ExperienciaLaboralComponent,
    ExplabHistorialComponent,
    EducacionComponent,
    EducacionHistorialComponent,
    SkillsComponent
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
