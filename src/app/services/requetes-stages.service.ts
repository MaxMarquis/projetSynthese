import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Secteur_activites } from '../interfaces/secteur_activites';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class RequetesStagesService {
  secteurActivitesUrl =
    'https://projet-synthese-api.herokuapp.com/api/2096428/activity-sector/';

  constructor(private http: HttpClient) {}

  // Fonction qui va récupérer la liste DES secteurs d'activités
  getSecteursActivites(): Observable<Secteur_activites[]> {
    return this.http.get<Secteur_activites[]>(this.secteurActivitesUrl);
  }

  // Fonction qui va révupérer UN secteur d'activités en fonction de l'id
  getSecteurActivites(__id: String): Observable<Secteur_activites> {
    return this.http.get<Secteur_activites>(this.secteurActivitesUrl + __id);
  }

  // Fonction qui ajoute un secteur d'activités
  addSecteurActivites(
    secteurActivites: Secteur_activites
  ): Observable<Secteur_activites> {
    return this.http.post<Secteur_activites>(
      this.secteurActivitesUrl,
      secteurActivites,
      httpOptions
    );
  }

  // Fonction qui modifie un secteur d'activités en fonction de l'id
  editSecteurActivites(
    secteurActivites: Secteur_activites
  ): Observable<Secteur_activites> {
    return this.http.put<Secteur_activites>(
      this.secteurActivitesUrl + secteurActivites.__id,
      secteurActivites,
      httpOptions
    );
  }

  // Fonction qui supprime un secteur d'activites en fonction de l'id
  deleteSecteurActivites(__id: String): Observable<Secteur_activites> {
    return this.http.delete<Secteur_activites>(this.secteurActivitesUrl + __id);
  }
}
