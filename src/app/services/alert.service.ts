import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';
//Global service
@Injectable()
export class AlertService {

  constructor() { }

  successMessage(message:string){
    Swal.fire({
        position : 'center',
        icon : 'success',
        title : message
    });
 }
  errorMessage(message:string){
      Swal.fire({
        position : 'center',
        icon : 'error',
        title: message
      })
  }

}
