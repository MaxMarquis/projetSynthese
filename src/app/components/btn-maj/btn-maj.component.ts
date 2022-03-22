import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-btn-maj',
  templateUrl: './btn-maj.component.html',
  styleUrls: ['./btn-maj.component.sass']
})
export class BtnMajComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  maj() {
    console.log("test")
  }
}
