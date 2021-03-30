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
  
  //numberOfBookmarks = 0
  // numberOfBookmarks = (n:number) => {
  // if(localStorage.getItem("Bookmarks")) {
  //    return this.numberOfBookmarks = JSON.parse(localStorage.getItem("Bookmarks")).length
  // } else {
  //    return this.numberOfBookmarks = 0
  // }} 




addVideo(newVideo: VideoLink){
  console.log(newVideo)
  console.log("This is JSON.parse", JSON.parse(localStorage.getItem("Bookmarks")))

  //extracting youtube videoID from different formats of  youtube links
  this.newVideoID = youtube_parser(newVideo.link)
  
  function youtube_parser(url){
    var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    var match = url.match(regExp);
    return (match&&match[7].length==11)? match[7] : false;
}

newVideo.link = this.newVideoID

 this.videos.push(newVideo);
 console.log(this.videos)
// adding to local storage
localStorage.setItem("History", JSON.stringify(this.videos));

}

  title = 'video-viewer';
}
