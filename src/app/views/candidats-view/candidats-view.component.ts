import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Candidats } from 'src/app/interfaces/candidats';
import { CandidatsService } from 'src/app/services/candidats.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-candidats-view',
  templateUrl: './candidats-view.component.html',
  styleUrls: ['./candidats-view.component.sass'],
})
export class CandidatsViewComponent implements OnInit {
  candidats: Candidats[] = []
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
    private candidatsService: CandidatsService,
    private router: Router,
    public modalService: NgbModal
  ) { }

  ngOnInit(): void {
    const candidatId = this.activeRoute.snapshot.paramMap.get('id') as string;
    console.log('Id Recu: ' + candidatId);
    this.getCandidat(candidatId);
    this.getCandidats();
  }

  // Va chercher le candidat à afficher
  getCandidat(id: string): void {
    this.candidatsService
      .getCandidat(id)
      .subscribe((res) => (this.candidat = res));
  }

  // Va chercher la liste des candidats pour la suppression
  getCandidats(): void {
    this.candidatsService
      .getCandidats()
      .subscribe((res) => (this.candidats = res));
  }

  /// Function Delete candidat
  onDelete(candidat: Candidats) {
    this.candidatsService.deleteCandidat(candidat._id).subscribe(
      (_result) =>
      (this.candidats = this.candidats.filter(
        (p) => p !== candidat,
        this.router.navigateByUrl('/candidats')
      ))
    );
  }

  open(content: any, candidat: Candidats) {
    this.modalService
      .open(content, { ariaLabelledBy: 'titremodal' })
      .result.then(
        (result) => {
          if (result === 'Delete') {
            this.onDelete(candidat);
          }
        },
        (reason) => { }
      );
  }
}
