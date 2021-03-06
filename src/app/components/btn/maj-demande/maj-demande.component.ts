import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Requetes_stages } from 'src/app/interfaces/requetes_stages';
import { RequetesStagesService } from 'src/app/services/requetes-stages.service';

@Component({
  selector: 'app-maj-demande',
  templateUrl: './maj-demande.component.html',
  styleUrls: ['./maj-demande.component.sass'],
})
export class MajDemandeComponent implements OnInit {
  @Input() nomBtn: string = '';
  @Input() formIsvalid: Boolean | null = false ;
  @Input() requeteStage: Requetes_stages = {
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
    private requetesStagesService: RequetesStagesService,
    private router: Router
  ) { }

  ngOnInit(): void { }
  maj() {
    // Si l'id est vide / donc nouvelle demande de stage => ADD
    if (this.requeteStage._id == '') {
      console.log(this.requeteStage);
      this.requetesStagesService
        .addRequeteStage(this.requeteStage)
        .subscribe((_) => {
          this.router.navigateByUrl('/demandes-de-stages');
        });
    }
    // Sinon la demande de stage existe => EDIT
    else {
      console.log(this.requeteStage);
      this.requetesStagesService
        .editRequeteStage(this.requeteStage)
        .subscribe((_result) => {
          this.router.navigateByUrl('/demandes-de-stages');
        });
    }
  }
}