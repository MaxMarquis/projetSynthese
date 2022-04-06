import { Component, OnInit } from '@angular/core';
import { Offres_stages } from 'src/app/interfaces/offres_stages';
import { ActivatedRoute } from '@angular/router';
import { OffresStagesService } from 'src/app/services/offres-stages.service';

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
    private offreStagesService: OffresStagesService
  ) { }

  ngOnInit(): void {
    const stageId = String(this.activeRoute.snapshot.paramMap.get("id"));
    console.log("Id Recu: " + stageId)
    this.getOffreStage(stageId)
  }

  offerStatus(offresstage: Offres_stages, active: boolean) {
    this.offreStagesService.editOffreStage({
      ...offresstage,
      active,
    }).subscribe((_result) => {
      offresstage.active = active;
    });
  }

  getOffreStage(id: string): void {
    this.offreStagesService.getOffreStage(id).subscribe((res) => this.offreStage = res)
  }
}