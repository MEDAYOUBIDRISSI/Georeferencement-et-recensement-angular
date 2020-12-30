import { Component, OnInit } from '@angular/core';
import { GestionnaireComptes } from '../../class/GestionnaireComptes'
import { AppService } from '../../services/app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gestionnaire-list',
  templateUrl: './gestionnaire-list.component.html',
  styleUrls: ['./gestionnaire-list.component.css']
})
export class GestionnaireListComponent implements OnInit {

  gestionnaires: GestionnaireComptes[] = [];

  constructor(private AppService: AppService,
    private router: Router) { }

  ngOnInit(): void {
      this.getGestionnaireComptes();
  }

  private getGestionnaireComptes(){
    this.AppService.getGestionnaireComptessList().subscribe(data => {
      this.gestionnaires = data;
      console.log(this.gestionnaires)
    });
  }

  GestionnaireCompteDetails(id: number){
    this.router.navigate(['GestionnaireCompte-details', id]);
  }

  updateGestionnaireCompte(id: number){ 
    this.router.navigate(['update-GestionnaireCompte', id]);
  }

  deleteGestionnaireCompte(id: number){
    this.AppService.deleteGestionnaireComptes(id).subscribe( data => {
      console.log(data);
      this.getGestionnaireComptes();
    })
  }

}
