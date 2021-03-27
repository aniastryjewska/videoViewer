import { Component } from '@angular/core';
import { VideoLink } from 'src/shared/models/video-link-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
 

  videos: VideoLink[] = new Array<VideoLink>();

  
addVideo(newVideo: VideoLink){
 this.videos.push(newVideo);
 console.log(this.videos)
// localStorage.setItem(`${newVideo.link}`, newVideo.link)
localStorage.setItem("History", JSON.stringify(this.videos));
}

  title = 'video-viewer';
}
