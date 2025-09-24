import { Component, Input } from '@angular/core';
import { NgIf, TitleCasePipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { UserData } from '../../services/user-data';

@Component({
  selector: 'app-intro',
  imports: [RouterLink, NgIf, TitleCasePipe],
  templateUrl: './intro.html',
  styleUrl: './intro.css'
})
export class Intro {


  @Input() user: { name: string; profession: string; email: string; phone: string ;linkedin: string; github: string; leetcode: string; photoUrl?: string } = {name:"", profession:"", email:"",phone: "",  linkedin:"", github:"" , leetcode: "" , photoUrl: ""}

  constructor(private userData : UserData){

    this.user = userData.user

  }

  

}
