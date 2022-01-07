import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.css']
})
export class ForgotComponent  {

  forgotForm= new FormGroup({
    email:new FormControl('',[Validators.required]),
  })

  getForgotFormData(data:any)
  {
    console.log(data.email);
    console.warn(data.email)
    console.log("hii")
    
    
  
  }

}
