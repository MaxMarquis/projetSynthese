import { Component, OnInit } from '@angular/core';
import { Requetes_stages } from 'src/app/interfaces/requetes_stages';
import { RequetesStagesService } from 'src/app/services/requetes-stages.service';
import { Location } from '@angular/common';
import {Router} from "@angular/router"

@Component({
  selector: 'app-demandes-stages-add',
  templateUrl: './demandes-stages-add.component.html',
  styleUrls: ['./demandes-stages-add.component.sass'],
})
export class DemandesStagesAddComponent implements OnInit {
  demandeStage: Requetes_stages = {
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
    private _location: Location,
    private router: Router
  ) {}

  ngOnInit(): void {}

  save(): void {
    this.requetesStagesService
      .addRequeteStage(this.demandeStage)
      .subscribe((_result) => {
        this.router.navigate(['/demandes-de-stages'])
      });
  }

  backClicked() {
    this._location.back();
  }
}
