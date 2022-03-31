import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Candidats } from 'src/app/interfaces/candidats';

@Component({
  selector: 'app-candidats-add',
  templateUrl: './candidats-add.component.html',
  styleUrls: ['./candidats-add.component.sass']
})
export class CandidatsAddComponent implements OnInit {
  candidat: Candidats = {
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
  };

  constructor(
    private location: Location
  ) { }

  ngOnInit(): void {
  }

  annuler(): void {
    this.location.back()
  }
  sauvegarder() {
    alert("it works ! ")
  }
}
