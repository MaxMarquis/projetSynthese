import { Component, OnInit } from '@angular/core';
import { Requetes_stages } from 'src/app/interfaces/requetes_stages';
import { SecteursActivitesService } from 'src/app/services/secteurs-activites.service';
import { Secteur_activites } from 'src/app/interfaces/secteur_activites';

@Component({
  selector: 'app-demandes-stages-add',
  templateUrl: './demandes-stages-add.component.html',
  styleUrls: ['./demandes-stages-add.component.sass'],
})
export class DemandesStagesAddComponent implements OnInit {
  activitySectors: Secteur_activites[] = [];
  requeteStage: Requetes_stages = {
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
    active: false,
    region: '',
    activitySector: '',
    city: '',
    linkToResume: '',
  };
  constructor(
    private activityService: SecteursActivitesService,
  ) { }

  ngOnInit(): void {
    this.getActivities();
  }

  getActivities(): void {
    this.activityService
      .getSecteursActivites()
      .subscribe((res) => (this.activitySectors = res));
  }

  checkPaid(data: string) {
    let ref = this.requeteStage.paid.find(x => x == data);
    if (ref == data) {
      return true;
    } else {
      return false;
    }
  }

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
