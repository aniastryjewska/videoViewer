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
  console.log(newVideo)

  //extracting youtube videoID from different formats of  youtube links
  let newVideoID = youtube_parser(newVideo.link)
  
  function youtube_parser(url){
    var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    var match = url.match(regExp);
    return (match&&match[7].length==11)? match[7] : false;
}

newVideo.link = newVideoID

 this.videos.push(newVideo);
 console.log(this.videos)
// localStorage.setItem(`${newVideo.link}`, newVideo.link)
localStorage.setItem("History", JSON.stringify(this.videos));

}

  title = 'video-viewer';
}
