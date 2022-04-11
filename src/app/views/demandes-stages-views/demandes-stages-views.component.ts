import { Component, OnInit } from '@angular/core';
import { Requetes_stages } from 'src/app/interfaces/requetes_stages';
import { Router, ActivatedRoute } from '@angular/router';
import { RequetesStagesService } from 'src/app/services/requetes-stages.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-demandes-stages-views',
  templateUrl: './demandes-stages-views.component.html',
  styleUrls: ['./demandes-stages-views.component.sass'],
})
export class DemandesStagesViewsComponent implements OnInit {
  requete_stage: Requetes_stages = {
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
    active: true,
    region: '',
    activitySector: '',
    city: '',
    linkToResume: '',
  };

  constructor(
    private activeRoute: ActivatedRoute,
    private router: Router,
    public modalService: NgbModal,
    private requetesStagesService: RequetesStagesService
  ) { }

  ngOnInit(): void {
    const stageId = String(this.activeRoute.snapshot.paramMap.get('id'));
    console.log('Id Recu: ' + stageId);
    this.getRequeteStage(stageId);
  }

  getRequeteStage(id: string): void {
    this.requetesStagesService
      .getRequeteStage(id)
      .subscribe((res) => (this.requete_stage = res));
  }

  // Transfert vers actif //
  requeteStatus(requete_stage: Requetes_stages, active: boolean) {
    this.requetesStagesService
      .editRequeteStage({
        ...requete_stage,
        active,
      })
      .subscribe((_result) => {
        requete_stage.active = active;
        this.router.navigateByUrl('/demandes-de-stages')
      });
  }

  // Supprime une demande de stage et renvoie vers la liste des demandes
  onDelete(Requetestages: Requetes_stages): void {
    this.requetesStagesService.deleteRequeteStage(Requetestages._id)
      .subscribe(_result => {
        this.router.navigateByUrl('/demandes-de-stages')
      });
  }

  // Ouvre un modal pour valider la suppression
  open(content: any, requeteStage: Requetes_stages) {
    this.modalService.open(content, { ariaLabelledBy: 'titremodal' }).result.then((result) => {
      if (result === 'Delete') {
        this.onDelete(requeteStage)
      }
    }, (_) => {
    });
  }
}


