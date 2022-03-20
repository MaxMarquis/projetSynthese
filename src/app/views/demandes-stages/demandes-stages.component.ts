import { Component, OnInit } from '@angular/core';
import { Requetes_stages } from 'src/app/interfaces/requetes_stages';
import { RequetesStagesService } from 'src/app/services/requetes-stages.service';


@Component({
  selector: 'app-demandes-stages',
  templateUrl: './demandes-stages.component.html',
  styleUrls: ['./demandes-stages.component.sass']
})
export class DemandesStagesComponent implements OnInit {
  requetesStage: Requetes_stages[] = [];


  constructor(private requetesStagesService: RequetesStagesService) {}

  ngOnInit(): void {
    this.getRequetestages();
  }

  getRequetestages(): void {
    this.requetesStagesService
      .getRequetesStages()
      .subscribe((res: Requetes_stages[]) => (this.requetesStage = res));
  }
  onDelete(Requetestages: Requetes_stages): void {
    this.requetesStagesService.deleteRequeteStage(Requetestages._id)
      .subscribe(_result => this.requetesStage = this.requetesStage.filter(p => p !== Requetestages));
  }

}
