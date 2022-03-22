import { Component, Input, OnInit } from '@angular/core';
import { Offres_stages } from 'src/app/interfaces/offres_stages';

@Component({
  selector: 'app-offre-stage',
  templateUrl: './offre-stage.component.html',
  styleUrls: ['./offre-stage.component.sass']
})
export class OffreStageComponent implements OnInit {

  @Input() offre_stage: Offres_stages = {
    _id: '',
    title: '',
    description: '',
    enterprise: '',
    startDate: new Date,
    endDate: new Date,
    program: '',
    requirements: '',
    stageType: '',
    hoursPerWeek: 0,
    additionalInfo: '',
    paid: [''],
    skills: [''],
    published: false,
    user: '',
    active: false,
  };
  
  constructor() { }

  ngOnInit(): void {
  }

}
