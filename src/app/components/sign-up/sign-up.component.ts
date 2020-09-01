import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../login/User';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';
import { AlertService } from '../../services/alert.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
  providers : [FormBuilder,ApiService]
})
export class SignUpComponent implements OnInit {
  hide = true;
  signUpForm:FormGroup;
  user:User = new User();

  constructor(private formBuilder:FormBuilder,
    private apiService : ApiService,
    private router:Router,
    private alertService : AlertService) {

    this.signUpForm = this.formBuilder.group({
      email : ["", [Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
      password : ["", [Validators.required,Validators.minLength(8)]],
    });
   }

  ngOnInit(): void {
  }

  signUp(){
    
    this.user = Object.assign({},this.signUpForm.value)
    this.apiService.addToDo(this.user).subscribe((result)=>{
      this.alertService.successMessage("Kayıt Başarılı");
      this.router.navigate(["/login"]);
    })
  }
}
