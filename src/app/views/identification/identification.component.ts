import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-identification',
  templateUrl: './identification.component.html',
  styleUrls: ['./identification.component.sass'],
})
export class IdentificationComponent implements OnInit {
  public profil = { name: '', email: '' };
  constructor(private router: Router) {}

  ngOnInit(): void {}

  login() {
    this.router.navigateByUrl('/tableau-de-bord', { state: this.profil });
    // alert(`Name: ${name} Courriel: ${email}`);
  }
}
