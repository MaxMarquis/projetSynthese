import { Component, OnInit } from '@angular/core';
import { Entreprise } from 'src/app/interfaces/entreprise';
import { EntrepriseService } from 'src/app/services/entreprise.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.sass']
})
export class MenuComponent implements OnInit {
  entreprises: Entreprise[] = []

  constructor(private entrepriseService: EntrepriseService) { }

  ngOnInit(): void {
    this.getEntreprise()
  }

  getEntreprise(): void {
    this.entrepriseService.getEntreprise().subscribe((res) => (this.entreprises = res))
  }
}
