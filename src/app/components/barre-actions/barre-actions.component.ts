import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-barre-actions',
  templateUrl: './barre-actions.component.html',
  styleUrls: ['./barre-actions.component.sass'],
})
export class BarreActionsComponent implements OnInit {
  @Input() profil = { name: '', email: '' };
  constructor() {}

  ngOnInit(): void {}
}
