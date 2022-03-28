import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Requetes_stages } from 'src/app/interfaces/requetes_stages';

@Component({
  selector: 'app-demandes-stages-views',
  templateUrl: './demandes-stages-views.component.html',
  styleUrls: ['./demandes-stages-views.component.sass']
})
export class DemandesStagesViewsComponent implements OnInit {
 requete_stage: Requetes_stages = {
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
    linkToResume: "",
  };

  constructor() { }

  ngOnInit(): void {

  }



}