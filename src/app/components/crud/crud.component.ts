import { Component, OnInit } from '@angular/core';
import { faCheck, faPen, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss']
})
export class CrudComponent implements OnInit {
  faCheck = faCheck;
  faPen = faPen;
  faTrash = faTrash;

  constructor() { }

  ngOnInit(): void {
  }

}
