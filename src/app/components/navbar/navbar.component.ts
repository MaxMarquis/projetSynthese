import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass'],
})
export class NavbarComponent implements OnInit {
  public profil = { name: '', email: '' };
  constructor(private userService: UserService, private router: Router) {}
  ngOnInit(): void {
    this.userService.isLoggedIn().subscribe((isLoggedIn) => {
      this.profil = this.userService.loginInfo();
    });
  }

  logout(): void {
    this.userService.logOut();
    this.router.navigateByUrl('');
  }
}
