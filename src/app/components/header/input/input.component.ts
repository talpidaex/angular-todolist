import { Component, OnInit } from '@angular/core';
import { TodoComponent } from '../../pages/todo/todo.component';
import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  constructor(public apiService: ApiService,
    public todoComponent: TodoComponent) { }

  ngOnInit(): void {
  }


  addToDo(input) {

    const test = {
      todo: input.value
    }
    const userEmail = localStorage.getItem("isLogged");
    console.log(userEmail);
    
    this.apiService.addUserToDo(userEmail, test).subscribe(res => {
      console.log(res);
      this.todoComponent.getAllToDo();
      input.value = '';
    }, (err) => {
      console.log(err);
    });
    //   this.apiService.addToDo(test).subscribe(res => {   
    //     console.log(res);
    //     this.todoComponent.getAllToDo();
    //     input.value = '';
    //   },(err)=>{
    //     console.log(err);
    //   });
    // }

    }
  
}