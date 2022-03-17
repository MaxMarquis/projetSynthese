import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Candidats } from 'src/app/interfaces/candidats';
import { CandidatsService } from 'src/app/services/candidats.service';

@Component({
  selector: 'app-candidats',
  templateUrl: './candidats.component.html',
  styleUrls: ['./candidats.component.sass'],
})
export class CandidatsComponent implements OnInit {
  candidats: Candidats[] = [];

  constructor(
    private candidatService: CandidatsService,
    private router: Router) { }

  ngOnInit(): void {
    this.getCandidats();
  }

  getCandidats(): void {
    this.candidatService
      .getCandidats()
      .subscribe((res) => (this.candidats = res));
  }

  addCandidat() {
    this.router.navigateByUrl('/candidats-add')
  }
}
