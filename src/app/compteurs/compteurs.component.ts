import { Component, OnInit } from '@angular/core';
import { Candidats } from '../interfaces/candidats';
import { Entreprise } from '../interfaces/entreprise';
import { Offres_stages } from '../interfaces/offres_stages';
import { Requetes_stages } from '../interfaces/requetes_stages';
import { CandidatsService } from '../services/candidats.service';
import { EntrepriseService } from '../services/entreprise.service';
import { OffresStagesService } from '../services/offres-stages.service';
import { RequetesStagesService } from '../services/requetes-stages.service';

@Component({
  selector: 'app-compteurs',
  templateUrl: './compteurs.component.html',
  styleUrls: ['./compteurs.component.sass']
})
export class CompteursComponent implements OnInit {
  demandes: Requetes_stages[] = []
  offres: Offres_stages[] = []
  candidats: Candidats[] = []
  entreprises: Entreprise[] = []

  constructor(
    private RequetesStagesService: RequetesStagesService,
    private OffresStagesService: OffresStagesService,
    private CandidatsService: CandidatsService,
    private EntrepriseService: EntrepriseService) { }

  ngOnInit(): void {
    this.getData()
  }

  getData(): void {
    this.getDemandes();
    this.getOffres();
    this.getEntreprises();
    this.getCandidats();
  }

  getDemandes(): void {
    this.RequetesStagesService.getRequetesStages().subscribe((res) => this.demandes = res)
  }
  getOffres(): void {
    this.OffresStagesService.getOffresStages().subscribe((res) => this.offres = res)
  }
  getCandidats(): void {
    this.CandidatsService.getCandidats().subscribe((res) => this.candidats = res)
  }
  getEntreprises(): void {
    this.EntrepriseService.getEntreprises().subscribe((res) => this.entreprises = res)
  }

}
