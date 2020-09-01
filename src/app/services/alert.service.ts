import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';
import { ApiService } from './api.service';

//Global service
@Injectable()
export class AlertService {

  constructor(private apiService : ApiService) { }

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
  alertDialog(){
    const userEmail = localStorage.getItem("isLogged");
    Swal.fire({
      title: 'Kaydı silmek istediğinize emin misiniz?',
      text: "Bu işlem geri alınamaz",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText : "iptal",
      confirmButtonText: 'Evet,kaydı sil!'
    }).then((result) => {
      if (result.value) {
        this.apiService.removeUserToDo(userEmail).subscribe((res:any)=>{
          Swal.fire(
            'Kayıt Silindi!',
            'Kayıt başarıyla silindi,yönlendiriliyorsunuz.',
            'success'
          ).then(()=>{
              window.location.href="/";
          })
        },(err)=>{
          console.log(err);
        });
      }
    })
  }
  

}
