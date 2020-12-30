import { Component, OnInit } from '@angular/core';
import { Recenseur } from '../../class/Recenseur'
import { AppService } from '../../services/app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recenseur-list',
  templateUrl: './recenseur-list.component.html',
  styleUrls: ['./recenseur-list.component.css']
})
export class RecenseurListComponent implements OnInit {

  recenseurs: Recenseur[] = [];

  constructor(private AppService: AppService,
    private router: Router) { }

  ngOnInit(): void {
      this.getRecenseur();
  }

  private getRecenseur(){
    this.AppService.getRecenseurList().subscribe(data => {
      this.recenseurs = data;
      console.log(this.recenseurs)
    });
  }

  RecenseurDetails(id: number){
    this.router.navigate(['Recenseur-details', id]);
  }

  updateRecenseur(id: number){ 
    this.router.navigate(['update-Recenseur', id]);
  }

  deleteRecenseur(id: number){
    this.AppService.deleteRecenseur(id).subscribe( data => {
      console.log(data);
      this.getRecenseur();
    })
  }
}
