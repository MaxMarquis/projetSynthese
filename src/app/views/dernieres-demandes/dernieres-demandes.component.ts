import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Requetes_stages } from 'src/app/interfaces/requetes_stages';
import { DEMANDESSTAGES } from 'src/app/mock-demandes-stages';
import { RequetesStagesService } from 'src/app/services/requetes-stages.service';

@Component({
  selector: 'app-dernieres-demandes',
  templateUrl: './dernieres-demandes.component.html',
  styleUrls: ['./dernieres-demandes.component.sass']
})

export class DernieresDemandesComponent implements OnInit {
  requetesStage: Requetes_stages[] = DEMANDESSTAGES;

  constructor(private requetesStagesService: RequetesStagesService,
    private router: Router) { }

  ngOnInit(): void {
    // this.getRequetestages();
  }

  /// Function get requetes_stages
  getRequetestages(): void {
    this.requetesStagesService
      .getRequetesStages()
      .subscribe((res: Requetes_stages[]) => (this.requetesStage = res));
  }

  /// Function Delete requetes_stages
  editDemandesstages() {
    this.router.navigateByUrl('/demandes-de-stages/edit')
  }
  /// Function Delete requetes_stages
  onDelete(Requetestages: Requetes_stages): void {
    this.requetesStagesService.deleteRequeteStage(Requetestages._id)
      .subscribe(_result => this.requetesStage = this.requetesStage.filter(p => p !== Requetestages));


  }


}
