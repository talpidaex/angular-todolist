import { Component, OnInit } from '@angular/core';
import { HomeComponent } from '../../home/home.component';
import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  constructor(private apiService : ApiService,
    private homeComponent : HomeComponent) { }

  ngOnInit(): void {
  }


  addToDo(input) {
    const test = {
      todo: input.value
    }
    this.apiService.addToDo(test).subscribe(res => {   
      console.log(res);
      this.homeComponent.getAllToDo();
      input.value = '';
    },(err)=>{
      console.log(err);
    });
  }

}
