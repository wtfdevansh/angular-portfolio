import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tech',
  imports: [],
  templateUrl: './tech.html',
  styleUrl: './tech.css'
})
export class Tech {

  @Input() techStack : string[] = []

}
