import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Requetes_stages } from '../interfaces/requetes_stages';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class RequetesStagesService {
  requetesStagesUrl =
    'https://projet-synthese-api.herokuapp.com/api/2096428/internship-request/';

  constructor(private http: HttpClient) { }

  // Fonction qui va récupérer la liste DES requêtes de stage
  getRequetesStages(): Observable<Requetes_stages[]> {
    return this.http.get<Requetes_stages[]>(this.requetesStagesUrl);
  }

  // Fonction qui va révupérer UNE requête de stage en fonction de l'id
  getRequeteStage(_id: String): Observable<Requetes_stages> {
    return this.http.get<Requetes_stages>(this.requetesStagesUrl + _id);
  }

  // Fonction qui ajoute une requête de stage
  addRequeteStage(requeteStage: Requetes_stages): Observable<Requetes_stages> {
    return this.http.post<Requetes_stages>(
      this.requetesStagesUrl,
      requeteStage,
      httpOptions
    );
  }

  // Fonction qui modifie une requête de stage en fonction de l'id
  editRequeteStage(requeteStage: Requetes_stages): Observable<Requetes_stages> {
    return this.http.put<Requetes_stages>(
      this.requetesStagesUrl + requeteStage._id,
      requeteStage,
      httpOptions
    );
  }

  // Fonction qui supprime une requête de stage en fonction de l'id
  deleteRequeteStage(_id: String): Observable<Requetes_stages> {
    return this.http.delete<Requetes_stages>(this.requetesStagesUrl + _id);
  }
}
