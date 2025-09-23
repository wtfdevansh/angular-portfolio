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

}
