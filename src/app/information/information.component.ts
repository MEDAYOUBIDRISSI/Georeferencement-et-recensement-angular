import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppService } from '../services/app.service';
import { Province } from '../class/Province';
import { Wilaya } from '../class/Wilaya';
import { Region } from '../class/Region';

const baseUrl = 'http://localhost:8080/api/tutorials';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css']
})
export class InformationComponent implements OnInit {

  listRegion: Region[] = [];
  listProvinces: Province[] = [];
  listWilaya: Wilaya[] = [];

  constructor(private http: HttpClient,
    private service:AppService) { }

  ngOnInit(): void {
    // this.service.findAllProvince().subscribe(obj =>{
    //   this.listProvinces.push(obj)
    //   console.log(this.listProvinces);
      
    // })
    // this.service.findAllWilaya().subscribe(obj =>{
    //   this.listWilaya.push(obj)
    //     console.log(this.listWilaya);

    // })
    // this.service.findAllRegion().subscribe(obj =>{
    //   this.listRegion.push(obj)
    //     console.log(this.listRegion);

    // })
  }

  /*findAllRegion(){
    this.service.findAllRegion().subscribe(obj =>{
      console.log(obj);
    })

  }*/

  getAll(): Observable<any> {
    return this.http.get(baseUrl);
  }

  get(id:number): Observable<any> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  create(data:{id:number,libelle:string}): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id:number, data:{id:number,libelle:string}): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id:number): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  findByTitle(title:string): Observable<any> {
    return this.http.get(`${baseUrl}?title=${title}`);
  }

}