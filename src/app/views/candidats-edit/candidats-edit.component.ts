import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Candidats } from 'src/app/interfaces/candidats';
import { CandidatsService } from 'src/app/services/candidats.service';

@Component({
  selector: 'app-candidats-edit',
  templateUrl: './candidats-edit.component.html',
  styleUrls: ['./candidats-edit.component.sass']
})
export class CandidatsEditComponent implements OnInit {
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
  };

  constructor(private activeRoute: ActivatedRoute, private candidatService: CandidatsService) { }

  ngOnInit(): void {
    const candidatID = this.activeRoute.snapshot.paramMap.get("id") as String;
    this.getCandidat(candidatID);
  }

  getCandidat(id: String): void {
    this.candidatService.getCandidat(id).subscribe((res) => this.candidat = res);
  }
}
