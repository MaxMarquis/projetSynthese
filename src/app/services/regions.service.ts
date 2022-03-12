import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Regions } from '../interfaces/regions';

@Injectable({
  providedIn: 'root',
})
export class RegionsService {
  regionsUrl = 'https://projet-synthese-api.herokuapp.com/api/2096428/region/';

  constructor(private http: HttpClient) {}

  // Fonction qui va récupérer la liste des régions
  getRegions(): Observable<Regions[]> {
    return this.http.get<Regions[]>(this.regionsUrl);
  }
}
