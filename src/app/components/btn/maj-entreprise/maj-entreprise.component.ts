import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Entreprise } from 'src/app/interfaces/entreprise';
import { EntrepriseService } from 'src/app/services/entreprise.service';

@Component({
  selector: 'app-maj-entreprise',
  templateUrl: './maj-entreprise.component.html',
  styleUrls: ['./maj-entreprise.component.sass']
})
export class MajEntrepriseComponent implements OnInit {
  @Input() nomBtn: String = "";
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

  constructor(private entrepriseService: EntrepriseService, private router: Router) { }

  ngOnInit(): void {
  }
  maj() {
    if (this.entreprise._id !== '') {
      this.entrepriseService
        .editEntreprise(this.entreprise)
        .subscribe((_result) => {
          this.router.navigate(['/demandes-de-stages']);
        });
    }
  }
}