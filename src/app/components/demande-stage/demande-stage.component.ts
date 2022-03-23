import { Component, Input, OnInit } from '@angular/core';
import { Requetes_stages } from 'src/app/interfaces/requetes_stages';

@Component({
  selector: 'app-demande-stage',
  templateUrl: './demande-stage.component.html',
  styleUrls: ['./demande-stage.component.sass']
})
export class DemandeStageComponent implements OnInit {

  @Input() requete_stage: Requetes_stages = {
    _id: '',
    title: '', 
    studentName: '', 
    studentPresentation: '', 
    school: '', 
    startDate: new Date, 
    endDate: new Date, 
    program: '', 
    stageType: '', 
    hoursPerWeek: 0, 
    additionalInfo: '', 
    skills: [''], 
    published: false, 
    paid: [''], 
    user: '', 
    active: false, 
    region: '', 
    activitySector: '', 
    city: '', 
    linkToResume: '', 
  };

  constructor() {}

  ngOnInit(): void {}


}
