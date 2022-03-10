import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root'
})
export class CandidatsService {
  candidatsUrl = 'https://projet-synthese-api.herokuapp.com/api/2096428/candidate/';

  constructor(private http: HttpClient) { }

  // Fonction qui va récupérer la liste DES candidats
  getCandidats() {
    return this.http.get(this.candidatsUrl);
  }

  // Fonction qui va récupérer UN SEUL candidat
  getCandidat(__id: String) {
    return this.http.get(this.candidatsUrl + __id);
  }

  // Fonction qui ajoute un candidat
  addCandidat(candidat: any) {
    return this.http.post(this.candidatsUrl, candidat, httpOptions);
  }

  // Fonction qui modifie un candidat
  editCandidat(candidat: any) {
    return this.http.put(this.candidatsUrl + candidat.__id, candidat, httpOptions);
  }

  // Fonction qui supprime un candidat
  deleteCandidat(__id: String) {
    return this.http.delete(this.candidatsUrl + __id);
  }
}
