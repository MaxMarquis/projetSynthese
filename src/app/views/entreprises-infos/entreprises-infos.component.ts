import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Entreprise } from 'src/app/interfaces/entreprise';
import { EntrepriseService } from 'src/app/services/entreprise.service';

@Component({
  selector: 'app-entreprises-infos',
  templateUrl: './entreprises-infos.component.html',
  styleUrls: ['./entreprises-infos.component.sass']
})
export class EntreprisesInfosComponent implements OnInit {
  entreprise: Entreprise = {
    _id: "123",
    name: "",
    description: "",
    imageUrl: "",
    contactName: "",
    contactEmail: "",
    contactPhone: "",
    address: "",
    city: "",
    province: "",
    postalCode: "",
    published: false,
  }

  constructor(private activeRoute: ActivatedRoute, private entreprisesService: EntrepriseService) { }

  ngOnInit(): void {
    const entrepriseID = this.activeRoute.snapshot.paramMap.get("id") as string;
    console.log("Id Recu: " + entrepriseID)
    this.getEntreprise(entrepriseID)
  }

  getEntreprise(id: string): void {
    this.entreprisesService.getEntreprise(id).subscribe((res) => this.entreprise = res)
  }
}
