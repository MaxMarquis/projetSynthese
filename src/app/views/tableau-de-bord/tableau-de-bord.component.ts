import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tableau-de-bord',
  templateUrl: './tableau-de-bord.component.html',
  styleUrls: ['./tableau-de-bord.component.sass'],
})
export class TableauDeBordComponent implements OnInit {
  profil = { name: 'test', email: '' };
  constructor() {}

  ngOnInit(): void {
    this.profil = history.state;
    console.log(this.profil);
  }
}
