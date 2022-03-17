import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-candidats-add',
  templateUrl: './candidats-add.component.html',
  styleUrls: ['./candidats-add.component.sass']
})
export class CandidatsAddComponent implements OnInit {

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
