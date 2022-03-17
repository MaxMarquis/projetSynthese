import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators'
import { Candidats } from 'src/app/interfaces/candidats';
import { CandidatsService } from 'src/app/services/candidats.service';

@Component({
  selector: 'app-candidats-infos',
  templateUrl: './candidats-infos.component.html',
  styleUrls: ['./candidats-infos.component.sass']
})
export class CandidatsInfosComponent implements OnInit {
  candidat: Candidats = {
    _id: '',
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

  constructor(
    private route: ActivatedRoute,
    private candidatsService: CandidatsService
  ) { }

  ngOnInit(): void {
    const candidatId = this.route.snapshot.paramMap.get("id") as string;
    console.log("Id Recu: " + candidatId)
    this.getCandidat(candidatId)
  }

  getCandidat(test: string): void {
    this.candidatsService.getCandidat(test).subscribe((res) => this.candidat = res)
  }
}
