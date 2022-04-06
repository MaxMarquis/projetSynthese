import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Entreprise } from 'src/app/interfaces/entreprise';

@Component({
  selector: 'app-entreprise',
  templateUrl: './entreprise.component.html',
  styleUrls: ['./entreprise.component.sass']
})
export class EntrepriseComponent implements OnInit {
  @Input() entreprise: Entreprise = {
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

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  getInfos(entreprise: Entreprise): void {
    console.log("Id envoyé: " + entreprise._id)
    this.route.navigate(['/entreprises/view', entreprise._id])
  }

}
