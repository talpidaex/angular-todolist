import { Component, OnInit } from '@angular/core';
import { TodoComponent } from '../../pages/todo/todo.component';
import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  constructor(private apiService : ApiService,
    private todoComponent : TodoComponent) { }

  ngOnInit(): void {
  }


  addToDo(input) {
    const test = {
      todo: input.value
    }
    this.apiService.addToDo(test).subscribe(res => {   
      console.log(res);
      this.todoComponent.getAllToDo();
      input.value = '';
    },(err)=>{
      console.log(err);
    });
  }

}
