import { Component, OnInit } from '@angular/core';
import { AdministrateurRegional } from '../../class/AdministrateurRegional'
import { AppService } from '../../services/app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-regional',
  templateUrl: './admin-regional.component.html',
  styleUrls: ['./admin-regional.component.css']
})
export class AdminRegionalComponent implements OnInit {

  administrateurRegionals: AdministrateurRegional[] = [];

  constructor(private AppService: AppService,
    private router: Router) { }

  ngOnInit(): void {
      this.getAdministrateurRegional();
  }

  private getAdministrateurRegional(){
    this.AppService.getAdministrateurRegionalList().subscribe(data => {
      this.administrateurRegionals = data;
      console.log(this.administrateurRegionals)
    });
  }

  AdministrateurRegionalDetails(id: number){
    this.router.navigate(['AdministrateurRegional-details', id]);
  }

  updateAdministrateurRegional(id: number){ 
    this.router.navigate(['update-AdministrateurRegional', id]);
  }

  deleteAdministrateurRegional(id: number){
    this.AppService.deleteAdministrateurRegional(id).subscribe( data => {
      console.log(data);
      this.getAdministrateurRegional();
    })
  }

}
