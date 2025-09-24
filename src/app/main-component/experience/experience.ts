import { Component, Input } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-experience',
  imports: [NgFor , CommonModule],
  templateUrl: './experience.html',
  styleUrl: './experience.css'
})
export class Experience {

  @Input() experience = [
    {companyName: "" , jobDescription: "" , startDate: "" , endDate: ""},
    {companyName: "" , jobDescription: "" , startDate: "" , endDate: ""}
  ]

  currentIndex: number = -1
  isHover: boolean = false

  onMouseEnter(idx : number){

    this.currentIndex = idx
    this.isHover = true

  }

  onMouseLeave(){

    this.isHover = false
    this.currentIndex = -1

  }

}
