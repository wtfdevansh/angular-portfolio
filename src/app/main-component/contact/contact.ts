import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {

  myForm : FormGroup
  isHovered: boolean = false
  wrongCredential: boolean = false
  isVisible= signal(false)

  constructor(private fb : FormBuilder){
    this.myForm = this.fb.group({
      firstName : ['' , Validators.required],
      lastName : ['' , Validators.required],
      email: ['' , Validators.required , Validators.email],
      mobile: ['' , Validators.required]

    })
  }

  onMouseEnter(){

    this.isHovered = true

  }

  onMouseLeave(){

    this.isHovered = false

  }

  onSubmit(){
    if(this.myForm.valid){
      console.log('Form Submitted', this.myForm.value)
      this.wrongCredential = false
      this.isVisible.set(true)
    } else {
      this.myForm.markAllAsTouched()
      this.wrongCredential = true
      this.isVisible.set(false)

    }
  }

}
