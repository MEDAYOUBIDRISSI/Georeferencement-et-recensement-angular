import { Component, OnInit } from '@angular/core';
import { AdministrateurRegional } from '../../class/AdministrateurRegional'
import { AppService } from '../../services/app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-admin-regional',
  templateUrl: './create-admin-regional.component.html',
  styleUrls: ['./create-admin-regional.component.css']
})
export class CreateAdminRegionalComponent implements OnInit {

  public administrateurRegional: AdministrateurRegional={id: -1, nom:'', prenom:'',email:'',adreese:'',tel:'' ,password:'' ,dateNaissance:new Date()};

  constructor(private administrateurRegionalService: AppService,
  private router: Router) { }

  ngOnInit(): void {
  }

  saveAdministrateurRegionalt(){
    this.administrateurRegionalService.createAdministrateurRegional(this.administrateurRegional).subscribe( data =>{
      console.log(data);
      this.goToAdministrateurRegionalList();
    },
    error => console.log(error));
  }

  goToAdministrateurRegionalList(){
    this.router.navigate(['/gestionneCompte']);
  }
  
  onSubmit(){
    console.log(this.administrateurRegional);
    alert("ffffffffffffff")
    this.saveAdministrateurRegionalt();
  }
}
