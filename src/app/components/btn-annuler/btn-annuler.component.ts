import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-btn-annuler',
  templateUrl: './btn-annuler.component.html',
  styleUrls: ['./btn-annuler.component.sass']
})
export class BtnAnnulerComponent implements OnInit {
  @Input() titre: String = "Annuler"

  constructor(private location: Location) { }

  ngOnInit(): void {
  }

  annuler(): void {
    this.location.back();
  }
}
