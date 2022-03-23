import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Candidats } from 'src/app/interfaces/candidats';

@Component({
  selector: 'app-candidat',
  templateUrl: './candidat.component.html',
  styleUrls: ['./candidat.component.sass'],
})
export class CandidatComponent implements OnInit {
  @Input() candidat: Candidats = {
    _id: '',
    name: '',
    description: '',
    jobTitle: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    province: '',
    postalCode: '',
    published: false,
    updatedAt: new Date(),
  };

  constructor(private router: Router) { }

  ngOnInit(): void { }

  getInfos(candidat: Candidats): void {
    console.log("Id envoyé: " + candidat._id)
    this.router.navigate(['/candidats-infos', candidat._id])
  }
}
