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



