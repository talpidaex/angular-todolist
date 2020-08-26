import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
  providers: [ApiService]
})
export class TodoListComponent implements OnInit {

  data = { pendings: [], inProgress: [], done: [] };

  constructor(private apiService: ApiService) { }
  ngOnInit(): void {

    this.getAllToDo();
  }

  getAllToDo() {
    this.apiService.getToDo().subscribe((res: any) => {
      //this.data = response
      Object.keys(res).forEach((key) => {
        this.data[key] = res[key];
      });
    }, (err) => {
      console.log(err);

    })
  }

  editToDo(arr, obj) {
    const editText = {
      todo: obj.todo
    }
    var foundIndex = arr.findIndex(x => x.todo == obj.todo);
    arr[foundIndex] = editText;
    this.apiService.updateToDo(this.data).subscribe(res => {
      console.log("Edit Başarılı!");
    }, (err) => {
      console.log(err);
    })
  }
  removeToDo(arr,obj){
    /* önce array indexini bul ve 1 adet öğe cıkart => splice */
    let index = arr.indexOf(obj);
    arr.splice(index,1);
    this.apiService.updateToDo(this.data).subscribe(res => {
    console.log("Remove Başarılı!");
   }, err => {
      console.log(err);
    })
 }
}
