import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class ApiService {
  private _jsonURL = 'assets/test.json';
  constructor(@Inject("apiUrl") private apiUrl,
                                private http:HttpClient
                                ) { }

  getToDo(){
     return this.http.get(this.apiUrl);
  }

  addToDo(obj){
    const httpOptions = {
      headers: new HttpHeaders({
          'Content-Type': 'application/x-www-form-urlencoded',
      })
  }

    return this.http.post(this.apiUrl,obj);
  }

  updateToDo(obj){
    return this.http.put(this.apiUrl,obj);
  }

  removeToDo(obj){
      return this.http.delete(this.apiUrl,obj);
  }

}
