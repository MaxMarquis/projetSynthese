import { Component, OnInit } from '@angular/core';
import { Offres_stages } from 'src/app/interfaces/offres_stages';

@Component({
  selector: 'app-offres-stages-add',
  templateUrl: './offres-stages-add.component.html',
  styleUrls: ['./offres-stages-add.component.sass']
})
export class OffresStagesAddComponent implements OnInit {
  offreStage: Offres_stages = {
    _id: "555",
    title: "",
    description: "",
    enterprise: "",
    startDate: new Date(),
    endDate: new Date(),
    program: "",
    requirements: "",
    stageType: "",
    hoursPerWeek: 0,
    additionalInfo: "",
    paid: [""],
    skills: [""],
    published: false,
    active: false
  }

  constructor() { }

  ngOnInit(): void {
  }

}
