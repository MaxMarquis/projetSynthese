import { Component, OnInit } from '@angular/core';
import { Offres_stages } from 'src/app/interfaces/offres_stages';
import { ActivatedRoute, Router } from '@angular/router';
import { OffresStagesService } from 'src/app/services/offres-stages.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-offres-stages-view',
  templateUrl: './offres-stages-view.component.html',
  styleUrls: ['./offres-stages-view.component.sass']
})
export class OffresStagesViewComponent implements OnInit {
  offreStage: Offres_stages = {
    _id: "",
    title: "Titre du stage",
    description: "Description",
    enterprise: "Nom de l'entreprise",
    startDate: new Date(),
    endDate: new Date(),
    program: "Program",
    requirements: "Requirements",
    stageType: "fulltime",
    hoursPerWeek: 35,
    additionalInfo: "More",
    paid: ["paid"],
    skills: ["skills"],
    published: true,
    active: true
  }
  value: string = ""
  requetesOffresService: any;

  constructor(
    private activeRoute: ActivatedRoute,
    private offreStagesService: OffresStagesService,
    public modalService: NgbModal,
    private router: Router,
  ) { }

  ngOnInit(): void {
    // stageId va récupérer l'id dans l'url
    const stageId = String(this.activeRoute.snapshot.paramMap.get("id"));
    console.log("Id Recu: " + stageId)
    this.getOffreStage(stageId)
  }

  // Fonction qui active l'offre de stage quand on clique sur le crochet vert
  offerStatus(offresstage: Offres_stages, active: boolean) {
    this.offreStagesService.editOffreStage({
      ...offresstage,
      active,
    }).subscribe((_result) => {
      this.router.navigateByUrl('/offres-de-stages')
      offresstage.active = active;
    });
  }

  // Fonction qui va récupérer l'offre de stage dans la base de données en fonction de l'id dans l'url
  getOffreStage(id: string): void {
    this.offreStagesService.getOffreStage(id).subscribe((res) => this.offreStage = res)
  }

  // Fonction qui supprime une l'offre de stage en fonction de son id
  onDelete(Offresstages: Offres_stages): void {
    this.offreStagesService.deleteOffreStage(Offresstages._id)
      .subscribe(_result => this.router.navigateByUrl('/offres-de-stages'));
  }

  // Ouvre un modal pour valider la suppression
  open(content: any, offresStage: Offres_stages) {
    this.modalService.open(content, { ariaLabelledBy: 'titremodal' }).result.then((result) => {
      if (result === 'Delete') {
        this.onDelete(offresStage)
      }
    }, (reason) => {
    });
  }
}
