import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {
  public profil = { name: '', email: '' };
  constructor(private userService: UserService) { }
  ngOnInit(): void {
    this.userService.isLoggedIn().subscribe((isLoggedIn)=>{
      this.profil = this.userService.loginInfo();
    })
  }
}
