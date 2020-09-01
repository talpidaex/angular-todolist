import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { ApiService } from '../../../services/api.service';
import { AlertService } from 'src/app/services/alert.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
  providers: [ApiService]
})
export class TodoComponent implements OnInit {
  data = { pendings: [], inProgress: [], done: [] };

  constructor(private apiService: ApiService,private alertService : AlertService) { }
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

  getAllToDo() {
    const userEmail = localStorage.getItem("isLogged");
    this.apiService.getUserToDo(userEmail).subscribe((res) => {
      Object.keys(res).forEach((key) => {
        this.data[key] = res[key];
        console.log(this.data[key]);
      })
    })
  }
  updateToDo() {
    const userEmail = localStorage.getItem("isLogged");
    this.apiService.updateUserToDo(userEmail, this.data).subscribe(res => {
      console.log("Update başarılı!");
    }, (err) => {
      console.log(err);
    });
  }
  removeToDo(arr, obj) {
    /* önce array indexini bul ve 1 adet öğe cıkart => splice */
    const userEmail = localStorage.getItem("isLogged");
    let index = arr.indexOf(obj);
    arr.splice(index, 1);
     this.apiService.updateUserToDo(userEmail,this.data).subscribe(res => {
      console.log("Remove Başarılı!");
      }, err => {
       console.log(err);
     })
  }

  editToDo(arr, obj) {
    const userEmail = localStorage.getItem("isLogged");
    const editText = {
      todo: obj.todo
    }
    var foundIndex = arr.findIndex(x => x.todo == obj.todo);
    arr[foundIndex] = editText;
    this.apiService.updateUserToDo(userEmail,this.data).subscribe(res => {
      console.log("Edit Başarılı!");
    }, (err) => {
      console.log(err);
    })
  }
}
