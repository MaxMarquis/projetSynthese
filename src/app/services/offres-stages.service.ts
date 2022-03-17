import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Offres_stages } from '../interfaces/offres_stages';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class OffresStagesService {
  offresStagesUrl =
    'https://projet-synthese-api.herokuapp.com/api/2096428/internship-offer/';

  constructor(private http: HttpClient) { }

  // Fonction qui va récupérer la liste DES offres de stage
  getOffresStages(): Observable<Offres_stages[]> {
    return this.http.get<Offres_stages[]>(this.offresStagesUrl);
  }

  // Fonction qui va récupérer UN SEUL offre de stage
  getOffreStage(_id: String): Observable<Offres_stages> {
    return this.http.get<Offres_stages>(this.offresStagesUrl + _id);
  }

  // Fonction qui ajoute une offre de stage
  addOffreStage(offreStage: Offres_stages): Observable<Offres_stages> {
    return this.http.post<Offres_stages>(
      this.offresStagesUrl,
      offreStage,
      httpOptions
    );
  }

  // Fonction qui modifie une offre de stage
  editOffreStage(offreStage: Offres_stages): Observable<Offres_stages> {
    return this.http.put<Offres_stages>(
      this.offresStagesUrl + offreStage._id,
      offreStage,
      httpOptions
    );
  }

  // Fonction qui supprime une offre de stage
  deleteOffreStage(_id: String): Observable<Offres_stages> {
    return this.http.delete<Offres_stages>(this.offresStagesUrl + _id);
  }
}
