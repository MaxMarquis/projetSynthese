import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Entreprise } from 'src/app/interfaces/entreprise';
import { EntrepriseService } from 'src/app/services/entreprise.service';

@Component({
  selector: 'app-entreprises-view',
  templateUrl: './entreprises-view.component.html',
  styleUrls: ['./entreprises-view.component.sass'],
})
export class EntreprisesViewComponent implements OnInit {
  entreprise: Entreprise = {
    _id: '123',
    name: 'Nom',
    description: 'Description',
    imageUrl: 'http://placeimg.com/640/480/business',
    contactName: 'Nom du contact',
    contactEmail: 'Email du contact',
    contactPhone: 'Telephone du contact',
    address: 'Adresse',
    city: 'Ville',
    province: 'Province',
    postalCode: 'Code postal',
    published: false,
  };

  constructor(
    private activeRoute: ActivatedRoute,
    private entreprisesService: EntrepriseService
  ) {}

  ngOnInit(): void {
    const entrepriseID = this.activeRoute.snapshot.paramMap.get('id') as string;
    console.log('Id Recu: ' + entrepriseID);
    this.getEntreprise(entrepriseID);
  }

  getEntreprise(id: string): void {
    this.entreprisesService
      .getEntreprise(id)
      .subscribe((res) => (this.entreprise = res));
  }
}
