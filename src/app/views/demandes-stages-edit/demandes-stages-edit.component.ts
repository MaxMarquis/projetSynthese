import { Component, OnInit } from '@angular/core';
import { Candidats } from 'src/app/interfaces/candidats';
import { Requetes_stages } from 'src/app/interfaces/requetes_stages';

@Component({
  selector: 'app-demandes-stages-edit',
  templateUrl: './demandes-stages-edit.component.html',
  styleUrls: ['./demandes-stages-edit.component.sass']
})
export class DemandesStagesEditComponent implements OnInit {
  demandeStage: Requetes_stages = {
    _id: "123",
    title: "Titre de la demande",
    description: "Description",
    entreprise: "Nom de l'entreprise",
    startDate: new Date(),
    endDate: new Date(),
    program: "Program",
    requirements: "Requirements",
    stageType: "Stage Type",
    hoursPerWeek: 40,
    additionalInfo: "More info",
    paid: ["paid"],
    skills: ["Skills"],
    published: false,
    updatedAt: new Date(),
    region: "Region",
    activitySector: "Activity Sector",
    studentName: "Nom élève",
    studentPresentation: "Présentation",
    school: "École",
    linkToResume: "https://perdu.com/",
    active: false
  };

  constructor() { }

  ngOnInit(): void {
  }

  test() {
    console.log("test: " + this.demandeStage.title)
  }
}
