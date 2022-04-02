import { Component, OnInit } from '@angular/core';
import { Entreprise } from 'src/app/interfaces/entreprise';

@Component({
  selector: 'app-entreprises-edit',
  templateUrl: './entreprises-edit.component.html',
  styleUrls: ['./entreprises-edit.component.sass']
})
export class EntreprisesEditComponent implements OnInit {
  entreprise: Entreprise = {
    _id: "123",
    name: "Nom",
    description: "Description",
    imageUrl: "http://placeimg.com/640/480/business",
    contactName: "Nom du contact",
    contactEmail: "Email du contact",
    contactPhone: "Telephone du contact",
    address: "Adresse",
    city: "Ville",
    province: "Province",
    postalCode: "Code postal",
    published: false,
  }
  constructor() { }

  ngOnInit(): void {
  }

}
