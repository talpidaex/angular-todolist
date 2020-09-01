import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {take} from 'rxjs/operators'
@Injectable()
export class ApiService {
  private _jsonURL = 'assets/test.json';
  constructor(@Inject("apiUrl") private apiUrl,
                                private http:HttpClient
                                ) { }

  getToDo(){
     return this.http.get(this.apiUrl).pipe(
       take(1),
     );
  }

  getUserToDo(email){
    return this.http.get(this.apiUrl+"/"+email).pipe(
      take(1),
    );
  }
  
  addToDo(obj){

    return this.http.post(this.apiUrl,obj).pipe(
      take(1)
    );
  }

  addUserToDo(email,obj){
    return this.http.patch(this.apiUrl+"/"+email,obj).pipe(
      take(1)
    );
  }

  updateToDo(obj){
    return this.http.put(this.apiUrl,obj).pipe(
      take(1)
    );
  }

  updateUserToDo(email,obj){
      return this.http.put(this.apiUrl+"/"+email,obj).pipe(
        take(1)
      );
  }
  removeUserToDo(email){
      return this.http.delete(this.apiUrl+"/"+email).pipe(
        take(1)
      );
  }

}
