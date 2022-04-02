import { Component, OnInit } from '@angular/core';
import { Candidats } from 'src/app/interfaces/candidats';

@Component({
  selector: 'app-candidats-edit',
  templateUrl: './candidats-edit.component.html',
  styleUrls: ['./candidats-edit.component.sass']
})
export class CandidatsEditComponent implements OnInit {
  candidat: Candidats = {
    _id: '',
    name: 'Nom et prenom',
    description: 'Description',
    jobTitle: 'Titre du poste',
    email: '',
    phone: '',
    address: '',
    city: '',
    province: '',
    postalCode: '',
    published: false,
  };

  constructor() { }

  ngOnInit(): void {
  }

}
