import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbareComponent } from './components/navbare/navbare.component';
import { FooterComponent } from './components/footer/footer.component';
import { LeftbarComponent } from './components/leftbar/leftbar.component';
import { ContetntComponent } from './components/contetnt/contetnt.component';
import { AgmCoreModule } from '@agm/core';
import { AddHeritageComponent } from './components/add-heritage/add-heritage.component';
import { GestionnaireCompteComponent } from './gestionnaire-compte/gestionnaire-compte.component';
import { RecenseurComponent } from './recenseur/recenseur.component';
import { InternauComponent } from './internau/internau.component';
import { AdministrateurRegionComponent } from './administrateur-region/administrateur-region.component';
import { InformationComponent } from './information/information.component';
import { TestAuthComponent } from './test-auth/test-auth.component';
import { AuthComponent } from './auth/auth.component';
import { AdminRegionalComponent } from './perssone/admin-regional/admin-regional.component';
import { RecenseurListComponent } from './perssone/recenseur-list/recenseur-list.component';
import { GestionnaireListComponent } from './perssone/gestionnaire-list/gestionnaire-list.component';
import { CreateAdminRegionalComponent } from './perssone/create-admin-regional/create-admin-regional.component';
import { CreateRecenseurComponent } from './perssone/create-recenseur/create-recenseur.component';
import { CreateGestionnaireComponent } from './perssone/create-gestionnaire/create-gestionnaire.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbareComponent,
    FooterComponent,
    LeftbarComponent,
    ContetntComponent,
    AddHeritageComponent,
    GestionnaireCompteComponent,
    RecenseurComponent,
    InternauComponent,
    AdministrateurRegionComponent,
    InformationComponent,
    TestAuthComponent,
    AuthComponent,
    AdminRegionalComponent,
    RecenseurListComponent,
    GestionnaireListComponent,
    CreateAdminRegionalComponent,
    CreateRecenseurComponent,
    CreateGestionnaireComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyACeQFCZsWw0a8xsM7o6mZjSKg_femfkto'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }



