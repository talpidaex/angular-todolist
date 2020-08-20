import { Component, OnInit, Input } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [ApiService]
})
export class HomeComponent implements OnInit {
  data  = {pendings:[],inProgress:[],done:[]};

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
    /* önce array indexini bul ve 1 adet öğe cıkart => splice */
    let index = arr.indexOf(obj);
    arr.splice(index,1);
    this.apiService.updateToDo(this.data).subscribe(res => {
    console.log("Remove Başarılı!");
   }, err => {
      console.log(err);
    })
 }

 editToDo(arr,obj){
      const editText  = {
        todo : obj.todo
      }
    var foundIndex = arr.findIndex(x => x.todo == obj.todo);
    arr[foundIndex] = editText;
    this.apiService.updateToDo(this.data).subscribe(res =>{
        console.log("Edit Başarılı!");
     },(err)=> {
        console.log(err);
     })

 }
 report(){
   console.log(this.data.done);
   
 }

}
