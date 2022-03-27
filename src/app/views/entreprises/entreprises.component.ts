import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Entreprise } from 'src/app/interfaces/entreprise';
import { EntrepriseService } from 'src/app/services/entreprise.service';

@Component({
  selector: 'app-entreprises',
  templateUrl: './entreprises.component.html',
  styleUrls: ['./entreprises.component.sass']
})
export class EntreprisesComponent implements OnInit {
  entreprises: Entreprise[] = []

  constructor(private entrepriseService: EntrepriseService,
    private route: Router) { }

  ngOnInit(): void {
    this.getEnterprise()
  }

  getEnterprise(): void {
    this.entrepriseService
      .getEntreprises()
      .subscribe((res) => (this.entreprises = res));
  }

  addEntreprise(): void {
    this.route.navigateByUrl("/entreprises/add")
  }
}
