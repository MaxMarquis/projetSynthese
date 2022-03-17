import { Component, OnInit } from '@angular/core';
import { Candidats } from 'src/app/interfaces/candidats';

@Component({
  selector: 'app-demandes-stages-edit',
  templateUrl: './demandes-stages-edit.component.html',
  styleUrls: ['./demandes-stages-edit.component.sass']
})
export class DemandesStagesEditComponent implements OnInit {
  candidat: Candidats = {
    _id: '136729',
    name: 'Test Candidat',
    description: 'Candidat pour test l\'édition',
    jobTitle: 'asd',
    email: 'asdasd',
    phone: '1231231233',
    address: '123 123',
    city: 'asd ',
    province: 'awe',
    postalCode: 'asd',
    published: false,
    updatedAt: new Date(),
  };

  constructor() { }

  ngOnInit(): void {
  }

}
