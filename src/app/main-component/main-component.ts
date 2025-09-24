import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Intro } from "./intro/intro";
import { About } from "./about/about";
import { Tech } from "./tech/tech";
import { Experience } from "./experience/experience";
import { Projects } from "./projects/projects";
import { Contact } from "./contact/contact";
import { UserData } from '../services/user-data';

@Component({
  selector: 'app-main-component',
  imports: [RouterLink, Intro, About, Tech, Experience, Projects, Contact],
  templateUrl: './main-component.html',
  styleUrl: './main-component.css'
})
export class MainComponent {

  user = {name:"", profession:"", email:"", phone: "",  linkedin:"", github:"" , leetcode:""}
  techStack : string[] = []
  experience = [
    {companyName: "" , jobDescription: "" , startDate: "" , endDate: ""},
    {companyName: "" , jobDescription: "" , startDate: "" , endDate: ""}
  ]
  projects : any[] = []

  constructor(private userData : UserData){
    this.user = userData.user
    this.techStack = userData.techStack
    this.experience = userData.experience
    this.projects = userData.projects
  }

}
