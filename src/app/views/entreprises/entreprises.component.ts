import { Component, OnInit } from '@angular/core';
import { Requetes_stages } from 'src/app/interfaces/requetes_stages';
import { RequetesStagesService } from 'src/app/services/requetes-stages.service';

@Component({
  selector: 'app-entreprises',
  templateUrl: './entreprises.component.html',
  styleUrls: ['./entreprises.component.sass']
})
export class EntreprisesComponent implements OnInit {
  requetesStage: Requetes_stages[] = []

  constructor(private requetesStagesService: RequetesStagesService) { }

  ngOnInit(): void {
    this.getRequetesStage()
  }

  getRequetesStage(): void {
    this.requetesStagesService
      .getRequetesStages()
      .subscribe((res) => (this.requetesStage = res));
  }
}
