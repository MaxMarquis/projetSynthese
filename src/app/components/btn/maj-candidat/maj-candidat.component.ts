import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Candidats } from 'src/app/interfaces/candidats';
import { CandidatsService } from 'src/app/services/candidats.service';

@Component({
  selector: 'app-maj-candidat',
  templateUrl: './maj-candidat.component.html',
  styleUrls: ['./maj-candidat.component.sass'],
})
export class MajCandidatComponent implements OnInit {
  @Input() nomBtn: String = '';
  @Input() formIsvalid: Boolean | null = false ;
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

  constructor(
    private candidatsService: CandidatsService,
    private router: Router
  ) {}

  ngOnInit(): void {}
  maj() {
    // Si l'id est vide / donc nouvelle entreprise => ADD
    if (this.candidat._id == '') {
      this.candidatsService.addCandidat(this.candidat).subscribe((_) => {
        this.router.navigateByUrl('/candidats');
      });
    }
    // Sinon l'entreprise existe => EDIT
    else {
      this.candidatsService.editCandidat(this.candidat).subscribe((_result) => {
        this.router.navigateByUrl('/candidats');
      });
    }
  }
}
