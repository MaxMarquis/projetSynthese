import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SecteursActivitesService {
  secteursActivitesUrl = 'https://projet-synthese-api.herokuapp.com/api/2096428/activity-sector/';

  constructor(private http: HttpClient) { }

  // Fonction qui va récupérer la liste des secteurs d'activités
  getSecteursActivites() {
    return this.http.get(this.secteursActivitesUrl)
  }

}
