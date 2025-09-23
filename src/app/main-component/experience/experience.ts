import { Component, Input } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-experience',
  imports: [NgFor],
  templateUrl: './experience.html',
  styleUrl: './experience.css'
})
export class Experience {

  @Input() experience = [
    {companyName: "" , jobDescription: "" , startDate: "" , endDate: ""},
    {companyName: "" , jobDescription: "" , startDate: "" , endDate: ""}
  ]

}
