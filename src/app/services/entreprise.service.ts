import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Entreprise } from '../interfaces/entreprise';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root'
})
export class EntrepriseService {
  entrepriseUrl = 'https://projet-synthese-api.herokuapp.com/api/2096428/enterprise/';

  constructor(
    private http: HttpClient) { }

  // Fonction qui va récupérer la liste DES entreprises
  getEntreprises(): Observable<Entreprise[]> {
    return this.http.get<Entreprise[]>(this.entrepriseUrl);
  }

  // Fonction qui va révupérer UNE entreprise en fonction de l'id
  getEntreprise(_id: String): Observable<Entreprise> {
    return this.http.get<Entreprise>(this.entrepriseUrl + _id,);
  }

  // Fonction qui ajoute une entreprise
  addEntreprise(entreprise: Entreprise): Observable<Entreprise> {
    return this.http.post<Entreprise>(this.entrepriseUrl, entreprise, httpOptions);
  }

  // Fonction qui modifie une entreprise en fonction de l'id
  editEntreprise(enterprise: Entreprise): Observable<Entreprise> {
    return this.http.put<Entreprise>(this.entrepriseUrl + enterprise._id, enterprise, httpOptions);
  }

  // Fonction qui supprime une entreprise en fonction de l'id
  deleteEntreprise(_id: String): Observable<Entreprise> {
    return this.http.delete<Entreprise>(this.entrepriseUrl + _id);
  }

}
