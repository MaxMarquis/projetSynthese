import { Component, Input, OnInit } from '@angular/core';
import { Candidats } from 'src/app/interfaces/candidats';

@Component({
  selector: 'app-candidat',
  templateUrl: './candidat.component.html',
  styleUrls: ['./candidat.component.sass'],
})
export class CandidatComponent implements OnInit {
  @Input() candidat: Candidats = {
    __id: '',
    name: '',
    description: '',
    jobTitle: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    province: '',
    postalCode: '',
    published: false,
    updatedAt: new Date(),
  };

  constructor() {}

  ngOnInit(): void {}

  test() {
    alert(`Nom: ${this.candidat.name}`);
  }
}
