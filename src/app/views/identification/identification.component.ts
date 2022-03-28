import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';


@Component({
  selector: 'app-identification',
  templateUrl: './identification.component.html',
  styleUrls: ['./identification.component.sass'],
})
export class IdentificationComponent implements OnInit {
  public profil = { name: '', email: '' };
  constructor(private router: Router,private userService: UserService) {}
  ngOnInit(): void {}

  login() {
    this.userService.logIn(JSON.stringify(this.profil));
    this.router.navigateByUrl('/tableau-de-bord');
  }
}
