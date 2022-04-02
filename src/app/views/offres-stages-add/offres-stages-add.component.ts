import { Component, OnInit } from '@angular/core';
import { Offres_stages } from 'src/app/interfaces/offres_stages';
import { OffresStagesService } from 'src/app/services/offres-stages.service';
import { Location } from '@angular/common';
import {Router} from "@angular/router"

@Component({
  selector: 'app-offres-stages-add',
  templateUrl: './offres-stages-add.component.html',
  styleUrls: ['./offres-stages-add.component.sass']
})
export class OffresStagesAddComponent implements OnInit {
  offreStage: Offres_stages = {
    _id: "",
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

  constructor(
    private OffresStagesService: OffresStagesService,
    private _location: Location,
    private router: Router
  ) {}

  ngOnInit(): void {}

  save(): void {
    this.OffresStagesService
      .addOffreStage(this.offreStage)
      .subscribe((_result) => {
        this.router.navigate(['/offres-de-stages'])
      });
  }

  backClicked() {
    this._location.back();
  }
}
