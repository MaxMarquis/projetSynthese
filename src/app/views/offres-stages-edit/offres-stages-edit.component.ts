import { Component, OnInit } from '@angular/core';
import { Offres_stages } from 'src/app/interfaces/offres_stages';

@Component({
  selector: 'app-offres-stages-edit',
  templateUrl: './offres-stages-edit.component.html',
  styleUrls: ['./offres-stages-edit.component.sass']
})
export class OffresStagesEditComponent implements OnInit {
  offreStage: Offres_stages = {
    _id: "123",
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
  value: String = ""

  constructor() { }

  ngOnInit(): void {

  }
  test(value: String) {
    return this.offreStage.paid.push(value)
  }

}
