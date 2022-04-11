import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Entreprise } from 'src/app/interfaces/entreprise';
import { EntrepriseService } from 'src/app/services/entreprise.service';

@Component({
  selector: 'app-entreprises-view',
  templateUrl: './entreprises-view.component.html',
  styleUrls: ['./entreprises-view.component.sass'],
})
export class EntreprisesViewComponent implements OnInit {
  entreprises: Entreprise[] = []
  entreprise: Entreprise = {
    _id: '123',
    name: 'Nom',
    description: 'Description',
    imageUrl: 'http://placeimg.com/640/480/business',
    contactName: 'Nom du contact',
    contactEmail: 'Email du contact',
    contactPhone: 'Telephone du contact',
    address: 'Adresse',
    city: 'Ville',
    province: 'Province',
    postalCode: 'Code postal',
    published: false,
  };

  constructor(
    private activeRoute: ActivatedRoute,
    private entreprisesService: EntrepriseService,
    private modalService: NgbModal,
    private router: Router
  ) { }

  ngOnInit(): void {
    const entrepriseID = this.activeRoute.snapshot.paramMap.get('id') as string;
    console.log('Id Recu: ' + entrepriseID);
    this.getEntreprise(entrepriseID);
  }

  getEntreprise(id: string): void {
    this.entreprisesService
      .getEntreprise(id)
      .subscribe((res) => (this.entreprise = res));
  }
  getEntreprises(): void {
    this.entreprisesService
      .getEntreprises()
      .subscribe((res) => (this.entreprises = res));
  }

  edit(entreprise: Entreprise): void {
    this.router.navigateByUrl("/entreprises/edit/" + entreprise._id)
  }

  /// Function Delete Entreprise
  onDelete(entreprise: Entreprise) {
    this.entreprisesService.deleteEntreprise(entreprise._id).subscribe(
      (_result) =>
      (this.entreprises = this.entreprises.filter(
        (p) => p !== entreprise,
        this.router.navigateByUrl('/entreprises')
      ))
    );
  }

  // Ouvre un modal pour valider la suppression
  open(content: any, entreprise: Entreprise) {
    this.modalService
      .open(content, { ariaLabelledBy: 'titremodal' })
      .result.then(
        (result) => {
          if (result === 'Delete') {
            this.onDelete(entreprise);
          }
        },
        (_) => { }
      );
  }
}
