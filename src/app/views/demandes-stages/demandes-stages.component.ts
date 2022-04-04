import { Component, OnInit } from '@angular/core';
import { Requetes_stages } from 'src/app/interfaces/requetes_stages';
import { DEMANDESSTAGES } from 'src/app/mock-demandes-stages';
import { RequetesStagesService } from 'src/app/services/requetes-stages.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-demandes-stages',
  templateUrl: './demandes-stages.component.html',
  styleUrls: ['./demandes-stages.component.sass'],
})
export class DemandesStagesComponent implements OnInit {
  requetesStage: Requetes_stages[] = DEMANDESSTAGES;

  constructor(
    private requetesStagesService: RequetesStagesService,
    public modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.getRequetestages();
  }

  /// Function get requetes_stages
  getRequetestages(): void {
    this.requetesStagesService
      .getRequetesStages()
      .subscribe((res: Requetes_stages[]) => (this.requetesStage = res));
  }

  /// Function Delete requetes_stages
  onDelete(Requetestages: Requetes_stages): void {
    this.requetesStagesService
      .deleteRequeteStage(Requetestages._id)
      .subscribe(
        (_result) =>
          (this.requetesStage = this.requetesStage.filter(
            (p) => p !== Requetestages
          ))
      );
  }
  requeteStatus(requetesstage: Requetes_stages, active: Boolean) {
    this.requetesStagesService
      .editRequeteStage({
        ...requetesstage,
        active,
      })
      .subscribe((_result) => {
        requetesstage.active = active;
      });
  }

  /// Modal suppression
  open(content: any, requetesStage: Requetes_stages) {
    this.modalService
      .open(content, { ariaLabelledBy: 'titremodal' })
      .result.then(
        (result) => {
          if (result === 'Delete') {
            this.onDelete(requetesStage);
          }
        },
        (reason) => {}
      );
  }
}
