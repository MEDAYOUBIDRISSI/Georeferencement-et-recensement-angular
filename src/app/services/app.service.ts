import {Injectable} from '@angular/core';
import {DataUserConnected} from '../class/DataUserConnected';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Auth } from '../class/FormAuth';
import { Province } from '../class/Province';
import { Wilaya } from '../class/Wilaya';

@Injectable({
  providedIn: 'root'
})


export class AppService {

  public static userAuth: DataUserConnected = {email: '', id: -1, nom: '', prenom: '', url: '', role: ''};
  private baseUrl = 'http://localhost:8080/';

  // application server
  constructor(private http: HttpClient) {
  }

  // authentification Methods : 
  public connexion(auth:Auth): Observable<DataUserConnected> {
    return this.http.post<DataUserConnected>(this.baseUrl + 'personne/auth/', auth);
  }
  // end Methods;

  // Wilaya
  public findAllWilaya(): Observable<Wilaya> {
    return this.http.get<Wilaya>(this.baseUrl + 'wilaya/all/');
  }

  // end Wilaya

   // Province
   public findAllProvince(): Observable<Province> {
    return this.http.get<Province>(this.baseUrl + 'province/all/');
  }

  // end Province
}
