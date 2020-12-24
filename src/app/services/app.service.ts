import {Injectable} from '@angular/core';
import {DataUserConnected} from '../class/DataUserConnected';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Auth } from '../class/FormAuth';

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
}
