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
    description: "Description",
    entreprise: "Nom de l'entreprise",
    title: "Titre de la demande",
    studentName: "Nom élève",
    studentPresentation: "Présentation",
    school: "École",
    startDate: new Date(),
    endDate: new Date(),
    program: "Program",
    stageType: "Stage Type",
    hoursPerWeek: 40,
    additionalInfo: "More info",
    skills: ["Skills"],
    published: false,
    paid: ["paid"],
    user: "user",
    active: false,
    region: "Region",
    activitySector: "Activity Sector",
    city: "City",
    linkToResume: "https://perdu.com/",
  };

  constructor() { }

  ngOnInit(): void {
  }

  test() {
    console.log("test: " + this.demandeStage.title)
  }
}
