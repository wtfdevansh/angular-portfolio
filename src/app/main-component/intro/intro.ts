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


  @Input() user: { name: string; profession: string; email: string; linkedin: string; github: string; photoUrl?: string } = {name:"", profession:"", email:"", linkedin:"", github:""}

  constructor(private userData : UserData){

    this.user = userData.user

  }

  

}
