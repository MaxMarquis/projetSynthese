import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Requetes_stages } from 'src/app/interfaces/requetes_stages';
import { RequetesStagesService } from 'src/app/services/requetes-stages.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-demandes-stages',
  templateUrl: './demandes-stages.component.html',
  styleUrls: ['./demandes-stages.component.sass']
})
export class DemandesStagesComponent implements OnInit {
  requetesStage: Requetes_stages[] = [];

  constructor(private requetesStagesService: RequetesStagesService,
    private router: Router, public modalService: NgbModal) { }

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
    this.requetesStagesService.deleteRequeteStage(Requetestages._id)
      .subscribe(_result => this.requetesStage = this.requetesStage.filter(p => p !== Requetestages));
  }
  addDemandesstages() {
    this.router.navigateByUrl('/demandes-de-stages/add')
  }

  /// Modal suppression
  open(content: any, offresStage: Requetes_stages) {
    this.modalService.open(content, { ariaLabelledBy: 'titremodal' }).result.then((result) => {
      if (result === 'Delete') {
        this.onDelete(offresStage)
      }
    }, (reason) => {
    });
  }
}