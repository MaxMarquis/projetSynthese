import { Component, OnInit } from '@angular/core';
import { Requetes_stages } from 'src/app/interfaces/requetes_stages';
import { RequetesStagesService } from 'src/app/services/requetes-stages.service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { SecteursActivitesService } from 'src/app/services/secteurs-activites.service';
import { Secteur_activites } from 'src/app/interfaces/secteur_activites';

@Component({
  selector: 'app-demandes-stages-add',
  templateUrl: './demandes-stages-add.component.html',
  styleUrls: ['./demandes-stages-add.component.sass'],
})
export class DemandesStagesAddComponent implements OnInit {
  activitySectors: Secteur_activites[] = [];
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
    skills: [],
    published: false,
    paid: [],
    user: '',
    active: false,
    region: '',
    activitySector: '',
    city: '',
    linkToResume: '',
  };
  constructor(
    private requetesStagesService: RequetesStagesService,
    private activityService: SecteursActivitesService,
    private _location: Location,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getActivities();
  }

  getActivities(): void {
    this.activityService
      .getSecteursActivites()
      .subscribe((res) => (this.activitySectors = res));
  }

  save(): void {
    this.requetesStagesService
      .addRequeteStage(this.demandeStage)
      .subscribe((_result) => {
        this.router.navigate(['/demandes-de-stages']);
      });
  }

  backClicked() {
    this._location.back();
  }
}
