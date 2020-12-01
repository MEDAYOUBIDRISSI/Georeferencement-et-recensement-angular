import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GestionnaireCompteComponent } from './gestionnaire-compte/gestionnaire-compte.component';
import { RecenseurComponent } from './recenseur/recenseur.component';
import { InternauComponent } from './internau/internau.component';
import { AdministrateurRegionComponent } from './administrateur-region/administrateur-region.component';
import { InformationComponent } from './information/information.component';

const routes: Routes = [
  { path: "" , redirectTo:'app' , pathMatch: 'full'},
  { path: "gestionneCompte", component:GestionnaireCompteComponent},
  { path: "recenseur", component:RecenseurComponent},
  { path: "internau", component:InternauComponent},
  { path: "administrateurregion", component:AdministrateurRegionComponent},
  { path: "info", component:InformationComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
