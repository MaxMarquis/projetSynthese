import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Candidats } from 'src/app/interfaces/candidats';
import { CandidatsService } from 'src/app/services/candidats.service';

@Component({
  selector: 'app-candidats-view',
  templateUrl: './candidats-view.component.html',
  styleUrls: ['./candidats-view.component.sass'],
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

  constructor(
    private activeRoute: ActivatedRoute,
    private candidatsService: CandidatsService
  ) {}

  ngOnInit(): void {
    const candidatId = this.activeRoute.snapshot.paramMap.get('id') as string;
    console.log('Id Recu: ' + candidatId);
    this.getCandidat(candidatId);
  }

  getCandidat(id: string): void {
    this.candidatsService
      .getCandidat(id)
      .subscribe((res) => (this.candidat = res));
  }
}
