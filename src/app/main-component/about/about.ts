import { Component, Input } from '@angular/core';
import { CommonModule, NgFor, TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-about',
  imports: [NgFor, TitleCasePipe ,  CommonModule],
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class About {

  @Input() techStack : string[] = []
  @Input() user : { name: string, profession: string } = { name: '', profession: '' }
  
  photoUrl = "assets/neon_tech.png"
  isHover: boolean = false;
  techName = ""

  get avatarUrl(): string {
    const name = encodeURIComponent(this.user?.name || 'User')
    return `https://ui-avatars.com/api/?name=${name}&background=111827&color=fff&size=256`
  }

  onMouseEnter(tname : string){

    this.isHover = true
    this.techName = tname

  }

  onMouseLeave(){
    this.isHover = false
  }
}
