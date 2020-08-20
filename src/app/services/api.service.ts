import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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

  addToDo(obj){

    return this.http.post(this.apiUrl,obj).pipe(
      take(1)
    );
  }

  updateToDo(obj){
    return this.http.put(this.apiUrl,obj).pipe(
      take(1)
    );
  }

  removeToDo(obj){
      return this.http.delete(this.apiUrl,obj).pipe(
        take(1)
      );
  }

}
