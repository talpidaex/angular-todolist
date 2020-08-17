import { Component, OnInit, Input } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { ApiService } from '../../services/api.service';
import { NgForm } from '@angular/forms';
import { element } from 'protractor';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [ApiService]
})
export class HomeComponent implements OnInit {
  data  = {pendings:[],inProgress:[],done:[]};
  title: string = "Kafein todolist"
  constructor(private apiService: ApiService) { }
  //data = {pendings:[],inProgress:[],done:[]}
  ngOnInit(): void {
    this.getAllToDo();
  }
  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
      this.updateToDo();
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
      this.updateToDo();
    }
  }
  gorevEkle(input) {
    const test = {
      todo: input.value
    }
    this.apiService.addToDo(test).subscribe(res => {   
      console.log(res);
      this.getAllToDo();
      input.value = '';
    },(err)=>{
      console.log(err);
    });
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
  updateToDo() {

    this.apiService.updateToDo(this.data).subscribe(res => {
      console.log("Update Başarılı!");
      console.log(this.data);

    }, err => {
      console.log(err);

    })
  }

  removeToDo(arr,obj){
    arr.pop(obj)
    this.apiService.updateToDo(this.data).subscribe(res => {
      console.log("Remove Başarılı!");

    }, err => {
      console.log(err);

    })
    
    
  //    this.apiService.removeToDo(name).subscribe(res=>{
  //        console.log(obj);
  //    });
  //
 }

}
