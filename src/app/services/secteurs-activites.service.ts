import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Secteur_activites } from '../interfaces/secteur_activites';

@Injectable({
  providedIn: 'root',
})
export class SecteursActivitesService {
  secteursActivitesUrl =
    'https://projet-synthese-api.herokuapp.com/api/2096428/activity-sector/';

  constructor(private http: HttpClient) {}

  // Fonction qui va récupérer la liste des secteurs d'activités
  getSecteursActivites(): Observable<Secteur_activites[]> {
    return this.http.get<Secteur_activites[]>(this.secteursActivitesUrl);
  }
}
