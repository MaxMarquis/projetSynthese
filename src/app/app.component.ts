import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = "eStage | Gestionnaire d'offre et demande de stages";

  // ne montre pas la navbar avant de se connecter sur l identification
  shouldShowNavBar = false;
  constructor( private userService: UserService) {}
  ngOnInit(): void {
    this.userService.isLoggedIn().subscribe((isLoggedIn)=>{
      this.shouldShowNavBar = isLoggedIn
    })
  }
}
