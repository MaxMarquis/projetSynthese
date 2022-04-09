import { Component, OnInit } from '@angular/core';
import { Requetes_stages } from 'src/app/interfaces/requetes_stages';
import { ActivatedRoute } from '@angular/router';
import { RequetesStagesService } from 'src/app/services/requetes-stages.service';

@Component({
  selector: 'app-demandes-stages-edit',
  templateUrl: './demandes-stages-edit.component.html',
  styleUrls: ['./demandes-stages-edit.component.sass']
})

export class DemandesStagesEditComponent implements OnInit {
  requeteStage: Requetes_stages = {
    _id: "",
    description: "",
    entreprise: "",
    title: "",
    studentName: "",
    studentPresentation: "",
    school: "",
    startDate: new Date(),
    endDate: new Date(),
    program: "",
    stageType: "",
    hoursPerWeek: 0,
    additionalInfo: "",
    skills: [""],
    published: false,
    paid: [""],
    active: false,
    region: "",
    activitySector: "",
    city: "",
    linkToResume: "",
  };

  constructor(
    private activeRoute: ActivatedRoute,
    private requetesStagesService: RequetesStagesService
  ) { }

  ngOnInit(): void {
    const stageId = this.activeRoute.snapshot.paramMap.get("id") as string;
    console.log("Id Recu: " + stageId)
    this.getRequeteStage(stageId)
  }

  getRequeteStage(id: string): void {
    this.requetesStagesService.getRequeteStage(id).subscribe((res) => this.requeteStage = res)
  }
}
