import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  myForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {

    this.crearFormulario();
   }

  ngOnInit() {
  }

  crearFormulario() {

    this.myForm = this.formBuilder.group({
     
      nombre  : ['', Validators.required  ],     
      apellido  : ['',  Validators.required ],     
      telefono  : [''],     
      email   : ['ejemplo@gmail.com', [Validators.required, Validators.email]],
      password:["",[Validators.required,Validators.minLength(6),Validators.maxLength(10)]],    
      
    });
  }

  registro(){
    console.log(this.myForm.value)

    if(this.myForm.valid){      
      localStorage.setItem('email', this.myForm.value.email);
      localStorage.setItem('password', this.myForm.value.password); 
      alert('Registro con exitoso')    
    } else{
      alert('Error al registrarse')
    }
  }

}
