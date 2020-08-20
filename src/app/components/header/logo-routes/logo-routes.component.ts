import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logo-routes',
  templateUrl: './logo-routes.component.html',
  styleUrls: ['./logo-routes.component.scss']
})
export class LogoRoutesComponent implements OnInit {
  title = "Kafein Todo"
  constructor() { }

  ngOnInit(): void {
  }

}
