import { Component, OnInit } from '@angular/core';
import { Candidats } from 'src/app/interfaces/candidats';

@Component({
  selector: 'app-candidats-view',
  templateUrl: './candidats-view.component.html',
  styleUrls: ['./candidats-view.component.sass']
})
export class CandidatsViewComponent implements OnInit {
  candidat: Candidats = {
    _id: '',
    name: 'Nom et prenom',
    description: 'Description',
    jobTitle: 'Titre du poste',
    email: 'email',
    phone: 'phone',
    address: '123 rue',
    city: 'ville',
    province: 'québec',
    postalCode: '123 asd',
    published: false,
  };

  constructor() { }

  ngOnInit(): void {
  }

}
