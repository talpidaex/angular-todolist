import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-in-progress-list',
  templateUrl: './in-progress-list.component.html',
  styleUrls: ['./in-progress-list.component.scss'],
  providers:[ApiService]
})
export class InProgressListComponent implements OnInit {

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
        console.log(this.data[key]);
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
