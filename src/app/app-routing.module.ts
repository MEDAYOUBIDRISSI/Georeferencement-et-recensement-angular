import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GestionnaireCompteComponent } from './gestionnaire-compte/gestionnaire-compte.component';
import { RecenseurComponent } from './recenseur/recenseur.component';
import { InternauComponent } from './internau/internau.component';
import { AdministrateurRegionComponent } from './administrateur-region/administrateur-region.component';
import { InformationComponent } from './information/information.component';
import { TestAuthComponent } from './test-auth/test-auth.component';
import { AuthComponent } from './auth/auth.component';
import { CreateAdminRegionalComponent } from './perssone/create-admin-regional/create-admin-regional.component';

const routes: Routes = [
  { path: "" , redirectTo:'app' , pathMatch: 'full'},
  { path: "gestionneCompte", component:GestionnaireCompteComponent},
  { path: "recenseur", component:RecenseurComponent},
  { path: "internau", component:InternauComponent},
  { path: "administrateurregion", component:AdministrateurRegionComponent},
  { path: "info", component:InformationComponent},
  { path: "testauth", component:TestAuthComponent},
  { path: "auth", component:AuthComponent},
  { path: "create-admin-regional", component:CreateAdminRegionalComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


