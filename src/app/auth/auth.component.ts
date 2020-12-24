import {Component, OnInit} from '@angular/core';
import {AppService} from '../services/app.service';
import { Router } from '@angular/router';
import { Auth } from '../class/FormAuth';
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  public personne: Auth = {email:'',password:''}
  constructor(private serviceAuth: AppService,
            private router: Router
            ) {
  }

  ngOnInit(): void {
  }

  public navigateToPage(role:string):void{  
    switch (role) {
      case 'AdministrateurRegional': this.router.navigate(['/administrateurregion']);
        break;
      case 'Recenseur': this.router.navigate(['/recenseur']);
        break;
      case 'Internaute': this.router.navigate(['/internau']);
      break;
      case 'GestionnaireComptes': this.router.navigate(['/gestionneCompte']);
      break;
      default:
        break;
    }
  }
  public connexion(): void {
    this.serviceAuth.connexion(this.personne).subscribe(obj => {
      if(obj != null){
        AppService.userAuth = obj
        this.navigateToPage(obj.role)
      }
      else alert("Les informations invalides !!?");
    });
  }
}
