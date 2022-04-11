import { Component, OnInit } from '@angular/core';
import { Requetes_stages } from 'src/app/interfaces/requetes_stages';
import { ActivatedRoute } from '@angular/router';
import { RequetesStagesService } from 'src/app/services/requetes-stages.service';
import { SecteursActivitesService } from 'src/app/services/secteurs-activites.service';
import { Secteur_activites } from 'src/app/interfaces/secteur_activites';

@Component({
  selector: 'app-demandes-stages-edit',
  templateUrl: './demandes-stages-edit.component.html',
  styleUrls: ['./demandes-stages-edit.component.sass']
})

export class DemandesStagesEditComponent implements OnInit {
  activitySectors: Secteur_activites[] = [];
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
    private requetesStagesService: RequetesStagesService,
    private activityService: SecteursActivitesService
  ) { }

  ngOnInit(): void {
    const stageId = this.activeRoute.snapshot.paramMap.get("id") as string;
    console.log("Id Recu: " + stageId);
    this.getRequeteStage(stageId);
    this.getActivities();
  }

  getRequeteStage(id: string): void {
    this.requetesStagesService.getRequeteStage(id).subscribe((res) => this.requeteStage = res)
  }

  getActivities(): void {
    this.activityService
      .getSecteursActivites()
      .subscribe((res) => (this.activitySectors = res));
  }

  // Event qui est appelé quand on clique sur une checkbox
  checkPaid(data: string) {
    let ref = this.requeteStage.paid.find(x => x == data);
    if (ref == data) {
      return true;
    } else {
      return false;
    }
  }

  // Lors qu'on coche une checkbox soit on push la value dans l'array paid soit on le splice(supprime)
  onCheckboxChange(event?: any): void {
    if (event) {
      const value = (event.currentTarget as HTMLElement)?.getAttribute("name");
      if (event.currentTarget.checked) {
        this.requeteStage.paid.push(value as string)
        console.log(this.requeteStage.paid)
      } else {
        this.requeteStage.paid.forEach((element, index) => {
          if (element == value) this.requeteStage.paid.splice(index, 1);
          console.log(this.requeteStage.paid)
        });
      }
    }
  }
}
