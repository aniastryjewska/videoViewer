import { Component } from '@angular/core';
import { VideoLink } from 'src/shared/models/video-link-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  newVideoID: string
  bookmarks: string[] = JSON.parse(localStorage.getItem("Bookmarks")) || []
  history = JSON.parse(localStorage.getItem("History")) || []
  numberOfBookmarks:Number = this.bookmarks.length


addVideo(newVideo: VideoLink){
  console.log("This is newVideo:", newVideo)
  console.log("Result of JSON.parse:", JSON.parse(localStorage.getItem("Bookmarks")))

   //extracting youtube videoID from different formats of youtube links
   this.newVideoID = youtube_parser(newVideo.link)
  
   function youtube_parser(url){
    var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    var match = url.match(regExp);
    return (match&&match[7].length==11)? match[7] : false;
   }

  //saving extracted youtube VideoID to newVideo object
   newVideo.link = this.newVideoID

  //updating history
  this.history.push(newVideo);

  //adding updated history to localStorage
  localStorage.setItem("History", JSON.stringify(this.history));
}

playVideoFromHistory(element){
  console.log(element)
  
  //updating history with the clicked element
  this.history.push(element);

  //updating newVideoID to enable bookmarking of the clicked element
  element.link = this.newVideoID

  //adding updated history to localStorage
  localStorage.setItem("History", JSON.stringify(this.history));
}


  title = 'video-viewer';
}
