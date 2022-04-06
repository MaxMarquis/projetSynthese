import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Requetes_stages } from 'src/app/interfaces/requetes_stages';
import { RequetesStagesService } from 'src/app/services/requetes-stages.service';

@Component({
  selector: 'app-maj-demande',
  templateUrl: './maj-demande.component.html',
  styleUrls: ['./maj-demande.component.sass']
})
export class MajDemandeComponent implements OnInit {
  @Input() nomBtn: String = "";
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

  constructor(private requetesStagesService: RequetesStagesService, private router: Router) { }

  ngOnInit(): void {
  }
  maj() {
    // Si l'id est vide / donc nouvelle demande de stage => ADD
    if (this.demandeStage._id == '') {
      this.requetesStagesService.addRequeteStage(this.demandeStage).subscribe((_) => {
        this.router.navigateByUrl("/demandes-de-stages")
      });
    }
    // Sinon la demande de stage existe => EDIT
    else {
      console.log(this.demandeStage)
      this.requetesStagesService
        .editRequeteStage(this.demandeStage)
        .subscribe((_result) => {
          this.router.navigateByUrl('/demandes-de-stages');
        });
    }
  }
}
