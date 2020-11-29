import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbareComponent } from './components/navbare/navbare.component';
import { FooterComponent } from './components/footer/footer.component';
import { LeftbarComponent } from './components/leftbar/leftbar.component';
import { ContetntComponent } from './components/contetnt/contetnt.component';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent,
    NavbareComponent,
    FooterComponent,
    LeftbarComponent,
    ContetntComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyACeQFCZsWw0a8xsM7o6mZjSKg_femfkto'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }



