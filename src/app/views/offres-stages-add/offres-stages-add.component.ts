import { Component, OnInit } from '@angular/core';
import { Offres_stages } from 'src/app/interfaces/offres_stages';

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
    paid: [],
    skills: [],
    published: false,
    active: false
  }

  constructor(
  ) { }

  ngOnInit(): void { }

  // Event qui est appelé quand on clique sur une checkbox
  checkPaid(data: string) {
    let ref = this.offreStage.paid.find(x => x == data);
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
        this.offreStage.paid.push(value as string)
        console.log(this.offreStage.paid)
      } else {
        this.offreStage.paid.forEach((element, index) => {
          if (element == value) this.offreStage.paid.splice(index, 1);
          console.log(this.offreStage.paid)
        });
      }
    }
  }
}
