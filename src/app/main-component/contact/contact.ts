import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {

  myForm : FormGroup

  constructor(private fb : FormBuilder){
    this.myForm = this.fb.group({
      firstName : ['' , Validators.required],
      lastName : ['' , Validators.required],
      email: ['' , Validators.required],
      mobile: ['' , Validators.required]

    })
  }

  onSubmit(){
    if(this.myForm.valid){
      console.log('Form Submitted', this.myForm.value)
    } else {
      this.myForm.markAllAsTouched()
    }
  }

}
