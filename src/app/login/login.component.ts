import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  myForm: FormGroup;
  email:string;
  password:string;

  constructor(private formBuilder: FormBuilder) {
    this.crearFormulario();
    this.email = localStorage.getItem('email');
    this.password = localStorage.getItem('password');  
   }

  ngOnInit() {
  }

  crearFormulario() {

    this.myForm = this.formBuilder.group({     
        
      email   : ['ejemplo@gmail.com', [Validators.required, Validators.email]],
      password:["",[Validators.required,Validators.minLength(6),Validators.maxLength(10)]],    
      
    });
  }


  login(){    

    if(this.myForm.valid && this.myForm.value.email === this.email && this.myForm.value.password === this.password ){

      alert('Ingreso al sistema');
        
    } else{

      alert('Datos incorrectos');
    }
    
  }





}
