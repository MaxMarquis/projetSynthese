import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Offres_stages } from 'src/app/interfaces/offres_stages';
import { OffresStagesService } from 'src/app/services/offres-stages.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-offres-stages',
  templateUrl: './offres-stages.component.html',
  styleUrls: ['./offres-stages.component.sass']
})

  export class OffresStagesComponent implements OnInit {

    offresStages: Offres_stages[] = [];
  
  
  
    constructor(private OffresStagesService: OffresStagesService,
      private router: Router,public modalService: NgbModal) { }
  
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
  
    editOffresstages() {
      this.router.navigateByUrl('/offres-de-stages/edit')
    }
  
      /// Modal suppression
    open(content:any, offresStage:Offres_stages) {
      this.modalService.open(content, {ariaLabelledBy: 'titremodal'}).result.then((result) => {
        if(result === 'Delete') {
          this.onDelete(offresStage)
        }
      }, (reason) => {
      });
    }
  }
  