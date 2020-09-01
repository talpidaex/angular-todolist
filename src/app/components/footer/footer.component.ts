import { Component, OnInit } from '@angular/core';
import { AlertService } from '../../services/alert.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(private alertService :AlertService) { }

  ngOnInit(): void {
  }

  
  removeAccount(){
    this.alertService.alertDialog();
  }

}
