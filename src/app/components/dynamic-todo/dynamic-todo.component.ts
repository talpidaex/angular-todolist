import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-dynamic-todo',
  templateUrl: './dynamic-todo.component.html',
  styleUrls: ['./dynamic-todo.component.scss'],
  providers : [HomeComponent,ApiService]
})
export class DynamicTodoComponent implements OnInit {

  data  = {pendings:[],inProgress:[],done:[]};

  constructor(public router:Router,public homeComponent : HomeComponent,private apiService :ApiService) { }
  ngOnInit(): void {
    
      this.getAllToDo();
  }

  getAllToDo() {
    this.apiService.getToDo().subscribe((res:any) => {
          //this.data = response
         Object.keys(res).forEach((key)=>{
            this.data[key] = res[key];
            console.log(this.data[key]); 
         });
    },(err)=>{
        console.log(err);
        
    })
  }

}
