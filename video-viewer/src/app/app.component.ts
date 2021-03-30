import { Component } from '@angular/core';
import { VideoLink } from 'src/shared/models/video-link-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  videos: VideoLink[] = new Array<VideoLink>();
  newVideoID: string
  bookmarks: string[] = JSON.parse(localStorage.getItem("Bookmarks")) || []
  
  bookmarksInLocalStorage = JSON.parse(localStorage.getItem("Bookmarks")) || []
  numberOfBookmarks = this.bookmarksInLocalStorage.length



addVideo(newVideo: VideoLink){
  console.log("This is newVideo:", newVideo)
  console.log("Result of JSON.parse:", JSON.parse(localStorage.getItem("Bookmarks")))

  //extracting youtube videoID from different formats of  youtube links
  this.newVideoID = youtube_parser(newVideo.link)
  
  function youtube_parser(url){
    var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    var match = url.match(regExp);
    return (match&&match[7].length==11)? match[7] : false;
}

newVideo.link = this.newVideoID

 this.videos.push(newVideo);
 console.log("This is videos array:", this.videos)
// adding to local storage
localStorage.setItem("History", JSON.stringify(this.videos));

}

  title = 'video-viewer';
}
