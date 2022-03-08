import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Entreprise } from '../interfaces/entreprise';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EntrepriseService {
  entrepriseUrl = 'https://projet-synthese-api.herokuapp.com/api/2096428/enterprise';

  constructor(
    private http: HttpClient) { }

  getEntreprise(): Observable<Entreprise[]> {
    return this.http.get<Entreprise[]>(this.entrepriseUrl);
  }
}
