import { Component, OnInit } from '@angular/core';
import { Entreprise } from 'src/app/interfaces/entreprise';

@Component({
  selector: 'app-entreprises-add',
  templateUrl: './entreprises-add.component.html',
  styleUrls: ['./entreprises-add.component.sass']
})
export class EntreprisesAddComponent implements OnInit {
  entreprise: Entreprise = {
    _id: "",
    name: "",
    description: "",
    imageUrl: "",
    contactName: "",
    contactEmail: "",
    contactPhone: "",
    address: "",
    city: "",
    province: "",
    postalCode: "",
    published: false,
  }

  constructor() { }

  ngOnInit(): void {
  }

}
