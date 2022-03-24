import { Component, Input, OnInit } from '@angular/core';
import { Offres_stages } from 'src/app/interfaces/offres_stages';

@Component({
  selector: 'app-btn-maj',
  templateUrl: './btn-maj.component.html',
  styleUrls: ['./btn-maj.component.sass']
})
export class BtnMajComponent implements OnInit {
  @Input() offreStage: Offres_stages = {
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
    active: false,
  };

  constructor() { }

  ngOnInit(): void {
  }

  maj() {
    console.log(this.offreStage)
  }
}
