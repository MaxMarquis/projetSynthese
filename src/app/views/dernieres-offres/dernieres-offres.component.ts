import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Offres_stages } from 'src/app/interfaces/offres_stages';
import { OffresStagesService } from 'src/app/services/offres-stages.service';

@Component({
  selector: 'app-dernieres-offres',
  templateUrl: './dernieres-offres.component.html',
  styleUrls: ['./dernieres-offres.component.sass']
})
export class DernieresOffresComponent implements OnInit {

  offresStages: Offres_stages[] = [];
  


  constructor(private OffresStagesService: OffresStagesService,
    private router: Router) { }

  ngOnInit(): void {
    this.getOffresstages();
  }

    /// Function get requetes_stages
  getOffresstages(): void {
    this.OffresStagesService
      .getOffresStages()
      .subscribe((res: Offres_stages[]) => (this.offresStages = res));
  }

  /// Function Delete requetes_stages
  onDelete(Offresstages: Offres_stages): void {
    this.OffresStagesService.deleteOffreStage(Offresstages._id)
      .subscribe(_result => this.offresStages = this.offresStages.filter(p => p !== Offresstages));

  
  }
}
