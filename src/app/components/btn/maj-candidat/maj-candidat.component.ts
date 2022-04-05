import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Candidats } from 'src/app/interfaces/candidats';
import { CandidatsService } from 'src/app/services/candidats.service';

@Component({
  selector: 'app-maj-candidat',
  templateUrl: './maj-candidat.component.html',
  styleUrls: ['./maj-candidat.component.sass']
})
export class MajCandidatComponent implements OnInit {
  @Input() nomBtn: String = "";
  @Input() candidat: Candidats = {
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

  constructor(private candidatsService: CandidatsService, private router: Router) { }

  ngOnInit(): void {
  }
  maj() {
    if (this.candidat._id !== '') {
      this.candidatsService
        .editCandidat(this.candidat)
        .subscribe((_result) => {
          this.router.navigate(['/demandes-de-stages']);
        });
    }
  }
}
