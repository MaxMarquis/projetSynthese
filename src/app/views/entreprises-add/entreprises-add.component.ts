import { Component, OnInit } from '@angular/core';
import { Entreprise } from 'src/app/interfaces/entreprise';

@Component({
  selector: 'app-entreprises-add',
  templateUrl: './entreprises-add.component.html',
  styleUrls: ['./entreprises-add.component.sass']
})
export class EntreprisesAddComponent implements OnInit {
  entreprise: Entreprise = {
    _id: "123",
    name: "Nom",
    description: "Description",
    imageUrl: "",
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
