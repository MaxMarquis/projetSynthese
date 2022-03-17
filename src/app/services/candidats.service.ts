import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Candidats } from '../interfaces/candidats';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class CandidatsService {
  candidatsUrl =
    'https://projet-synthese-api.herokuapp.com/api/2096428/candidate/';

  constructor(private http: HttpClient) { }

  // Fonction qui va récupérer la liste DES candidats
  getCandidats(): Observable<Candidats[]> {
    return this.http.get<Candidats[]>(this.candidatsUrl);
  }

  // Fonction qui va récupérer UN SEUL candidat
  getCandidat(_id: String): Observable<Candidats> {
    return this.http.get<Candidats>(this.candidatsUrl + _id);
  }

  // Fonction qui ajoute un candidat
  addCandidat(candidat: Candidats): Observable<Candidats> {
    return this.http.post<Candidats>(this.candidatsUrl, candidat, httpOptions);
  }

  // Fonction qui modifie un candidat
  editCandidat(candidat: Candidats): Observable<Candidats> {
    return this.http.put<Candidats>(
      this.candidatsUrl + candidat._id,
      candidat,
      httpOptions
    );
  }

  // Fonction qui supprime un candidat
  deleteCandidat(_id: String): Observable<Candidats> {
    return this.http.delete<Candidats>(this.candidatsUrl + _id);
  }
}
