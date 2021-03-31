import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.css']
})
export class BookmarksComponent implements OnInit {
  
  isShow = true;
  isAlreadyBookmarked = false;

  @Input() newVideoID;
  @Input() bookmarks;
  @Input() numberOfBookmarks;
  

  constructor() { }

  ngOnInit(): void {
  }

bookmarkVideo() {
  //check if bookmarks array is up to date with localStorage
  if(localStorage.getItem("Bookmarks")) {
    this.bookmarks = JSON.parse(localStorage.getItem("Bookmarks"))
  }
  
  //check if current video is already bookmarked and bookmark if not
  if(this.bookmarks.indexOf(this.newVideoID) !== -1) {
    this.isAlreadyBookmarked = true;
  } else {
  this.isAlreadyBookmarked = false;
  this.bookmarks.push(this.newVideoID)
  this.numberOfBookmarks = this.bookmarks.length
 }

  //save updated bookmarks array to localStorage
  localStorage.setItem("Bookmarks", JSON.stringify(this.bookmarks));
  

}


showBookmarks() {
this.isShow = !this.isShow
}


}
