import { Component, Input, OnInit } from '@angular/core';
import { Offres_stages } from 'src/app/interfaces/offres_stages';
import { Requetes_stages } from 'src/app/interfaces/requetes_stages';
import { Router } from '@angular/router';
import { RequetesStagesService } from 'src/app/services/requetes-stages.service';

@Component({
  selector: 'app-btn-maj',
  templateUrl: './btn-maj.component.html',
  styleUrls: ['./btn-maj.component.sass'],
})
export class BtnMajComponent implements OnInit {
  @Input() offreStage: Offres_stages = {
    _id: '',
    title: '',
    description: '',
    enterprise: '',
    startDate: new Date(),
    endDate: new Date(),
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
  @Input() demandeStage: Requetes_stages = {
    _id: '',
    description: '',
    entreprise: '',
    title: '',
    studentName: '',
    studentPresentation: '',
    school: '',
    startDate: new Date(),
    endDate: new Date(),
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

  constructor(
    private requetesStagesService: RequetesStagesService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  maj() {
    if (this.offreStage._id !== '') {
      console.log(this.offreStage);
    }
    if (this.demandeStage._id !== '') {
      this.requetesStagesService
        .editRequeteStage(this.demandeStage)
        .subscribe((_result) => {
          this.router.navigate(['/demandes-de-stages']);
        });
    }
  }
}
