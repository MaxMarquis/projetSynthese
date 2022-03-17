import { Component, OnInit } from '@angular/core';
import { faPlus, faChartLine, faAddressCard, faPaperPlane, faUser, faBuilding } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {
  faPlus = faPlus;
  faChartLine = faChartLine;
  faAddressCard = faAddressCard;
  faPaperPlane = faPaperPlane;
  faUser = faUser;
  faBuilding = faBuilding;

  constructor() { }

  ngOnInit(): void {
  }

}
