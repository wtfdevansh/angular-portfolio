import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-projects',
  imports: [CommonModule , FormsModule],
  templateUrl: './projects.html',
  styleUrl: './projects.css'
})
export class Projects {

  @Input() projects : any[] = []

  isHovered: boolean = false;
  currentProject: string = ""

  onMouseEnter(projectName : string){
    this.isHovered = true
    this.currentProject = projectName
  }

  onMouseLeave(){
    this.isHovered = false
    this.currentProject = ""
  }


  

}
