import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {NgbActiveModal, NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { AcercaDeComponent } from './componentes/acerca-de/acerca-de.component';

import { LoginComponent } from './componentes/login/login.component';

import { LoginVentanaComponent } from './componentes/login-ventana/login-ventana.component';


import { HeaderLogoapComponent } from './componentes/header-logoap/header-logoap.component';
import { HeaderBannerComponent } from './componentes/header-banner/header-banner.component';
import { HeaderRedesComponent } from './componentes/header-redes/header-redes.component';
import { ExperienciaLaboralComponent } from './componentes/experiencia-laboral/experiencia-laboral.component';

import { EducacionComponent } from './componentes/educacion/educacion.component';

import { SkillsComponent } from './componentes/skills/skills.component';
import { Routes } from '@angular/router';
import { DataServices } from './componentes/data.services';
import { HttpClientModule } from'@angular/common/http';
import { LoginService } from './componentes/login-ventana/login.service';
import { CookieService } from 'ngx-cookie-service';


const appRoutes: Routes=[
{path: 'login', component:LoginVentanaComponent},
{path: 'home', component:AppComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AcercaDeComponent,

    LoginComponent,

    LoginVentanaComponent,


    HeaderLogoapComponent,
    HeaderBannerComponent,
    HeaderRedesComponent,
    ExperienciaLaboralComponent,

    EducacionComponent,

    SkillsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,

  ],
  providers: [DataServices, LoginService, CookieService, NgbActiveModal],
  bootstrap: [AppComponent],
  entryComponents:[LoginVentanaComponent]
})
export class AppModule { }
