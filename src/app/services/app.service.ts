import {Injectable} from '@angular/core';
import {DataUserConnected} from '../class/DataUserConnected';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Auth } from '../class/FormAuth';
import { Province } from '../class/Province';
import { Wilaya } from '../class/Wilaya';
import { Region } from '../class/Region';
import { GestionnaireComptes } from '../class/GestionnaireComptes';
import { Recenseur } from '../class/Recenseur';
import { AdministrateurRegional } from '../class/AdministrateurRegional';

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

   // Region
   public findAllRegion(): Observable<Region> {
    return this.http.get<Region>(this.baseUrl + 'region/all/');
  }
  // end Region

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

//////////////////////////////////////////////////////////////////////////////////////////////
  
///GestionnaireComptes

  getGestionnaireComptessList(): Observable<GestionnaireComptes[]>{
    return this.http.get<GestionnaireComptes[]>(`${this.baseUrl}`+ 'gestionnaireComptes/all');
  }

  createGestionnaireComptes(gestionnaireComptes: GestionnaireComptes): Observable<Object>{
    return this.http.post(`${this.baseUrl}`, gestionnaireComptes);
  }

  getGestionnaireComptesById(id: number): Observable<GestionnaireComptes>{
    return this.http.get<GestionnaireComptes>(`${this.baseUrl}/${id}`);
  }

  updateGestionnaireComptes(id: number, gestionnaireComptes: GestionnaireComptes): Observable<Object>{
    return this.http.put(`${this.baseUrl}/${id}`, gestionnaireComptes);
  }

  deleteGestionnaireComptes(id: number): Observable<Object>{
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  //////////////////////////////////////////////////////////////////////////

  //Recenceure-List

  getRecenseurList(): Observable<Recenseur[]>{
    return this.http.get<Recenseur[]>(`${this.baseUrl}`+ 'recenseur/all');
  }

  createRecenseur(Recenseur: Recenseur): Observable<Object>{
    return this.http.post(`${this.baseUrl}`, Recenseur);
  }

  getRecenseurById(id: number): Observable<Recenseur>{
    return this.http.get<Recenseur>(`${this.baseUrl}/${id}`);
  }

  updateRecenseur(id: number, Recenseur: Recenseur): Observable<Object>{
    return this.http.put(`${this.baseUrl}/${id}`, Recenseur);
  }

  deleteRecenseur(id: number): Observable<Object>{
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  //////////////////////////////////////////////////////////////////////////////////

  //Administrateur Regional

  getAdministrateurRegionalList(): Observable<AdministrateurRegional[]>{
    return this.http.get<AdministrateurRegional[]>(`${this.baseUrl}`+ 'administrateurRegional/all');
  }

  createAdministrateurRegional(AdministrateurRegional: AdministrateurRegional): Observable<Object>{
    return this.http.post(`${this.baseUrl}`+ 'administrateurRegional/save', AdministrateurRegional);
  }

  getAdministrateurRegionalById(id: number): Observable<AdministrateurRegional>{
    return this.http.get<AdministrateurRegional>(`${this.baseUrl}/${id}`);
  }

  updateAdministrateurRegional(id: number, AdministrateurRegional: AdministrateurRegional): Observable<Object>{
    return this.http.put(`${this.baseUrl}/${id}`, AdministrateurRegional);
  }

  deleteAdministrateurRegional(id: number): Observable<Object>{
    return this.http.delete(`${this.baseUrl}/${id}`);
  }


}
