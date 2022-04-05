import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Offres_stages } from 'src/app/interfaces/offres_stages';
import { OffresStagesService } from 'src/app/services/offres-stages.service';

@Component({
  selector: 'app-maj-offre',
  templateUrl: './maj-offre.component.html',
  styleUrls: ['./maj-offre.component.sass']
})
export class MajOffreComponent implements OnInit {
  @Input() nomBtn: String = "";
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

  constructor(private offresStagesService: OffresStagesService, private router: Router) { }

  ngOnInit(): void {
  }
  maj() {
    if (this.offreStage._id !== '') {
      this.offresStagesService
        .editOffreStage(this.offreStage)
        .subscribe((_result) => {
          this.router.navigate(['/offres-de-stages']);
        });
    }
  }
}
